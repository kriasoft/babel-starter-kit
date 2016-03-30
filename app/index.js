'use strict';

var path = require('path');
var glob = require('glob');
var generators = require('yeoman-generator');
var askName = require('inquirer-npm-name');
var _ = require('lodash');
var extend = require('deep-extend');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  initializing: function () {
    this.props = {};
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    this.sourceRoot(path.join(this.sourceRoot(), '../../babel-starter-kit'));
  },

  prompting: function () {
    var done = this.async();

    askName({
      name: 'name',
      message: 'The name of your project',
      default: _.kebabCase(path.basename(process.cwd())),
      filter: _.kebabCase,
      validate: function (str) {
        return str.length > 0;
      }
    }, this, function (name) {
      this.props.name = name;
      done();
    }.bind(this));
  },

  default: function () {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        'Your project must be inside a folder named ' + this.props.name + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }
  },

  askFor: function () {
    var done = this.async();

    var prompts = [{
      name: 'description',
      message: 'Description',
      when: !this.pkg.description
    }, {
      name: 'githubUsername',
      message: 'GitHub username or organization',
      when: !this.pkg.repository
    }, {
      name: 'author',
      message: 'Author',
      when: !this.pkg.author,
      store: true
    }];

    this.prompt(prompts, function (props) {
      this.props = _.merge(this.props, props);

      if (props.githubUsername) {
        this.props.repository = props.githubUsername + '/' + this.props.name;
      }

      done();
    }.bind(this));
  },

  writing: function () {
    var done = this.async();
    glob('**/*.*', { cwd: this.sourceRoot(), dot: true }, function (err, files) {
      if (err) {
        this.log('Error:', err.message);
        return done();
      }
      files.forEach(function (file) {
        var dest = file;
        if (file === 'npmignore') {
          dest = '.' + file;
        } else if (file === '.npmignore') {
          dest = '.gitignore';
        }
        if (file.charAt(0) === '.') {
          this.fs.copy(
            this.templatePath(file),
            this.destinationPath(dest)
          );
        } else {
          this.fs.copyTpl(
            this.templatePath(file),
            this.destinationPath(dest),
            {
              name: _.kebabCase(this.props.name),
              description: this.props.description,
              githubUsername: this.props.githubUsername,
              repository: this.props.repository,
              author: this.props.author,
              license: 'MIT'
            }
          );
        }
      }, this);
      done();
    }.bind(this));
  },

  install: function () {
    this.installDependencies({bower: false});
  },

});
