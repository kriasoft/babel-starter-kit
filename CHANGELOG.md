## Babel Starter Kit Change Log

All notable changes to this project will be documented in this file.

### [Unreleased][unreleased]

- Allow to execute tests in a browser environment (PLANNED)

### [v1.2.0] - 2016-05-04

- Add `tools/build.js` script
- Build source files into `dist` folder
- Update npm modules
- Publish as CommonJS, ES2015 and UMD via [Rollup](http://rollupjs.org/). See `tools/build.js`.

### [v1.1.2] - 2016-04-03

- Add `npm run test:watch` npm script for running tests in watch mode
- Add a recipe: Testing with `mocha` and `jsdom` 
- Add a recipe: Throwing errors with FB's `invariant` (`fbjs`) library
- Update `eslint` and `babel-eslint` npm modules to the latest versions
- Update unit test code sample
- Add [CONTRIBUTING.md](CONTRIBUTING.md) and [CHANGELOG.md](CHANGELOG.md) files

### [v1.1.0] - 2016-03-31

- Add code coverage in unit tests with [Istanbul](https://github.com/gotwarlost/istanbul) and [Coveralls](https://coveralls.io/) [#8](https://github.com/kriasoft/babel-starter-kit/pull/8)

### [v1.0.0] - 2016-03-30

- Clean up the code and `package.json` file, update project dependencies
- Integrate [Easystatic](https://easystatic.com) that generates a static site from the `docs/*.md` files

[unreleased]: https://github.com/kriasoft/babel-starter-kit/compare/v1.2.0...HEAD
[v1.2.0]: https://github.com/kriasoft/babel-starter-kit/compare/v1.1.2...v1.2.0
[v1.1.2]: https://github.com/kriasoft/babel-starter-kit/compare/v1.1.0...v1.1.2
[v1.1.0]: https://github.com/kriasoft/babel-starter-kit/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/kriasoft/babel-starter-kit/compare/v0.1.1...v1.0.0
