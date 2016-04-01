# Babel Starter Kit

[![NPM version](http://img.shields.io/npm/v/generator-javascript.svg?style=flat-square)](https://www.npmjs.com/package/generator-javascript)
[![NPM downloads](http://img.shields.io/npm/dm/generator-javascript.svg?style=flat-square)](https://www.npmjs.com/package/generator-javascript)
[![Build Status](http://img.shields.io/travis/kriasoft/babel-starter-kit/master.svg?style=flat-square)](https://travis-ci.org/kriasoft/babel-starter-kit)
[![Coverage Status](https://img.shields.io/coveralls/kriasoft/babel-starter-kit.svg?style=flat-square)](https://coveralls.io/github/kriasoft/babel-starter-kit)
[![Dependency Status](http://img.shields.io/david/dev/kriasoft/babel-starter-kit.svg?style=flat-square)](https://david-dm.org/kriasoft/babel-starter-kit#info=devDependencies)
[![Online Chat](http://img.shields.io/badge/chat_room-%23babel--starter--kit-blue.svg?style=flat-square)](https://gitter.im/kriasoft/babel-starter-kit)

> Babel Starter Kit is a project template for authoring and publishing JavaScript libraries using
> [ES2015](https://babeljs.io/docs/learn-es2015/)+ via [Babel](https://babeljs.io/)

See the [changelog](CHANGELOG.md) for past and future (planned) changes to the project &nbsp;|&nbsp;
Join [#babel-starter-git](https://gitter.im/kriasoft/babel-starter-kit) on Gitter to stay up to date

### Features

&nbsp; &nbsp; ✓ Author your code, including tests, in [ES2015](https://babeljs.io/docs/learn-es2015/)+ via [Babel](http://babeljs.io/)<br>
&nbsp; &nbsp; ✓ Pre-configured unit tests with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/)<br>
&nbsp; &nbsp; ✓ Pre-configured test coverage with [Istanbul](https://github.com/gotwarlost/istanbul) and [Coveralls](https://coveralls.io/)<br>
&nbsp; &nbsp; ✓ Project homepage boilerplate generated from `docs/*.md` files with [Easystatic](https://easystatic.com) ([demo](http://www.kriasoft.com/babel-starter-kit/))<br>
&nbsp; &nbsp; ✓ [Yeoman](http://yeoman.io/) generator ([generator-javascript](https://github.com/kriasoft/babel-starter-kit/tree/yeoman-generator))<br>
&nbsp; &nbsp; ✓ Cross-platform, minimum dependencies<br>

### Getting Started

For better experience, make sure that you have `npm v3+` installed. Start by cloning this repo and
installing project dependencies:

```sh
$ git clone -o babel-starter-kit -b master --single-branch \
      https://github.com/kriasoft/babel-starter-kit.git <your-project-name>
$ cd <your-project-name>
$ npm install
```

Update your name in `LICENSE.txt` and project information in `package.json` and `README.md` files.
Write your code in `src` folder, write tests in `test` folder. Run `npm run build` to compile the
source code into a distributable format. Write documentation in markdown format in `docs` folder.
Run `npm start` to launch a development server with the documentation site.

Alternatively, start a new project with Yeoman:

```sh
$ npm install -g generator-javascript
$ mkdir <your-project-name>
$ cd <your-project-name>
$ yo javascript
```

### How to Test

Run one, or a combination of the following commands to lint and test your code:

```sh
$ npm run lint          # Lint the source code with ESLint
$ npm test              # Run unit tests with Mocha
$ npm test -- --watch   # Run unit tests wtih Mocha, and watch files for changes
$ npm run test:cover    # Run unit tests with coverage with Mocha and Istanbul
```

### How to Update

Down the road you can fetch and merge the recent changes from this repo back into your project:

```sh
$ git checkout master
$ git fetch babel-starter-kit
$ git merge babel-starter-kit/master
$ npm install
```

### Related Projects

* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) — Isomorphic web app boilerplate (Node.js/Express, React.js, GraphQL)

### Get in Touch

 * [#babel-starter-kit](https://gitter.im/kriasoft/babel-starter-kit) on Gitter
 * [@koistya](https://twitter.com/koistya) on [Codementor](https://www.codementor.io/koistya)

### License

Copyright © 2015-2016 Kriasoft, LLC. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/kriasoft/react-starter-kit/blob/master/LICENSE.txt) file.
The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license.

---
Made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/kriasoft/babel-starter-kit/graphs/contributors)
