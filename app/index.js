'use strict';

var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var npmName = require('npm-name');
var chalk = require('chalk');
var yosay = require('yosay');
var glob = require('glob');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.props = {};
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    this.sourceRoot(path.join(this.sourceRoot(), '../../babel-starter-kit'));
  },

  prompting: {
    hello: function () {
      this.log(yosay(
        'Welcome to the primo ' + chalk.green('JavaScript Library') + ' generator!'
      ));
    },

    askForModuleName: function () {
      var self = this;
      var done = this.async();

      var prompts = [{
        name: 'name',
        message: 'Module Name',
        default: path.basename(process.cwd()),
        filter: _.kebabCase,
        validate: function (input) {
          return input.length ? true : false;
        },
        when: !this.pkg.name
      }, {
        type: 'confirm',
        name: 'askAgain',
        message: 'The name above already exists on npm, choose another?',
        default: true,
        when: function (answers) {
          if (self.pkg.name) {
            return false;
          }

          var done = this.async();

          npmName(answers.name, function (err, available) {
            done(available);
          });
        }
      }];

      this.prompt(prompts, function (props) {
        if (props.askAgain) {
          return this.prompting.askForModuleName.call(this);
        }

        this.props = _.extend(this.props, props);

        done();
      }.bind(this));
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
        this.props = _.extend(this.props, props);

        if (props.githubUsername) {
          this.props.repository = props.githubUsername + '/' + this.props.name;
        }

        done();
      }.bind(this));
    }
  },

  writing: function () {
    var done = this.async();
    glob('**/*', { cwd: this.sourceRoot(), dot: true }, function (err, files) {
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
        if (file === 'package.json') {
          this.fs.copyTpl(
            this.templatePath(file),
            this.destinationPath(dest),
            {
              name: _.kebabCase(this.props.name),
              description: this.props.description,
              repository: this.props.repository,
              author: this.props.author,
              license: 'MIT'
            }
          );
        } else {
          this.fs.copy(
            this.templatePath(file),
            this.destinationPath(dest)
          );
        }
      }, this);
      done();
    }.bind(this));
  },

  install: function () {
    this.npmInstall();
  }

});
