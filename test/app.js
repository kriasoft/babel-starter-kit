'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var mockery = require('mockery');

describe('generator:app', function () {
  before(function () {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false
    });

    mockery.registerMock('superb', function () {
      return 'cat\'s meow';
    });

    mockery.registerMock('npm-name', function (name, fn) {
      fn(null, true);
    });
  });

  after(function () {
    mockery.disable();
  });

  describe('defaults', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .withPrompts({
          name: 'generator-temp',
          description: 'A node generator',
          homepage: 'http://yeoman.io',
          githubAccount: 'yeoman',
          authorName: 'The Yeoman Team',
          authorEmail: 'hi@yeoman.io',
          authorUrl: 'http://yeoman.io',
          keywords: [],
          license: 'MIT'
        })
        .on('end', done);
    });

    it('created and CD into a folder named like the generator', function () {
      assert.equal(path.basename(process.cwd()), 'generator-temp');
    });

    it('creates files', function () {
      var expected = [
        '.editorconfig',
        '.gitattributes',
        '.gitignore',
        'README.md',
        'package.json',
        'src/index.js',
        'src/Greeting.js'
      ];

      assert.file(expected);
    });

    it('fills package.json with correct information', function () {
      assert.JSONFileContent('package.json', {
        name: 'generator-temp'
      });
    });

    it('fills the README with project data', function () {
      assert.fileContent('README.md', '# [generator-temp');
    });
  });
});
