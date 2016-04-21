---
id: bsk:getting-started
title: Getting Started ∙ Babel Starter Kit
---

# Getting Started

For better experience, make sure that you have `npm v3+` installed. Start by cloning this repo and
installing project dependencies:

```sh
$ git clone -o babel-starter-kit \
      -b master --single-branch \
      https://github.com/kriasoft/babel-starter-kit.git \
      <your-project-name>
$ cd <your-project-name>
$ npm install
```

Update your name in `LICENSE.txt` and project information in `package.json` and `README.md` files.
Write your code in `src` folder, write tests in `test` folder. Run `npm run build` to compile the
source code into a distributable format. Write documentation in markdown format in `docs` folder.
Run `npm start` to launch a development server with the documentation site.

Alternatively, start a new project with **Yeoman**:

```sh
$ npm install -g generator-javascript
$ mkdir <your-project-name>
$ cd <your-project-name>
$ yo javascript
```

### How to Build

Running `npm run build` will compile source files to a distributable format (CommonJS, ES6 and UMD)
ready to be published to NPM from the `dist` folder. See `tools/build.js` for more info.

### How to Test

Run one, or a combination of the following commands to lint and test your code:

* `npm run lint`       — lint the source code with ESLint
* `npm test`           — run unit tests with Mocha
* `npm run test:watch` — run unit tests with Mocha, and watch files for changes
* `npm run test:cover` — run unit tests with code coverage by Istanbul

### How to Update

Down the road you can fetch and merge the recent changes from this repo back into your project:

```sh
$ git checkout master
$ git fetch babel-starter-kit
$ git merge babel-starter-kit/master
$ npm install
```
