# Babel Starter Kit

[![NPM version](http://img.shields.io/npm/v/generator-javascript.svg?style=flat-square)](https://www.npmjs.com/package/generator-javascript)
[![NPM downloads](http://img.shields.io/npm/dm/generator-javascript.svg?style=flat-square)](https://www.npmjs.com/package/generator-javascript)
[![Build Status](http://img.shields.io/travis/kriasoft/babel-starter-kit/master.svg?style=flat-square)](https://travis-ci.org/kriasoft/babel-starter-kit)
[![Dependency Status](http://img.shields.io/david/dev/kriasoft/babel-starter-kit.svg?style=flat-square)](https://david-dm.org/kriasoft/babel-starter-kit#info=devDependencies)
[![Online Chat](http://img.shields.io/badge/chat_room-%23babel--starter--kit-blue.svg?style=flat-square)](https://gitter.im/kriasoft/babel-starter-kit)

> Babel Starter Kit is a project template for authoring and publishing JavaScript libraries

### Features

&nbsp; &nbsp; ✓ Next generation JavaScript via [Babel](http://babeljs.io/)<br>
&nbsp; &nbsp; ✓ Publish to [NPM](https://www.npmjs.com/) as ES5, ES6+ and UMD<br>
&nbsp; &nbsp; ✓ Pre-configured tests with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/)<br>
&nbsp; &nbsp; ✓ Project documentation boilerplate ([demo](http://www.kriasoft.com/babel-starter-kit/))<br>
&nbsp; &nbsp; ✓ [Yeoman](http://yeoman.io/) generator ([generator-javascript](https://github.com/kriasoft/babel-starter-kit/tree/yeoman-generator))<br>
&nbsp; &nbsp; ✓ Cross-platform, minimum dependencies<br>

### Getting Started

For better experience, make sure that you have `npm v3+` installed. Start by cloning this repo and
installing project dependencies:

```
$ git clone -o babel-starter-kit -b master --single-branch \
      https://github.com/kriasoft/babel-starter-kit.git MyProject
$ cd MyProject
$ npm install
```

Update your name in `LICENSE.txt` and project information in `package.json` and `README.md` files.
Write your code in `src` folder, write tests in `test` folder. Run `npm run build` to compile the
source code into a distributable format. Write documentation in markdown format in `docs` folder.
Run `npm start` to launch a development server with the documentation site.

### How to Test

```shell
$ npm run lint          # Lint your code
$ npm test              # Run unit tests, or `npm test -- --watch`
```

### How to Update

Down the road you can fetch and merge the recent changes from this repo back into your project:

```
$ git checkout master
$ git fetch babel-starter-kit
$ git merge babel-starter-kit/master
$ npm install
```

### Related Projects

* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) — Isomorphic web app boilerplate (Node.js/Express, React.js, GraphQL)

### Support

 * [#babel-starter-kit](https://gitter.im/kriasoft/babel-starter-kit) on Gitter
 * [@koistya](https://twitter.com/koistya) on [Codementor](https://www.codementor.io/koistya)

### License

Copyright © 2015-2016 Kriasoft, LLC. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/kriasoft/react-starter-kit/blob/master/LICENSE.txt) file.
The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license.

---
Made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/kriasoft/babel-starter-kit/graphs/contributors)
