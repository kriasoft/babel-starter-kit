---
id: bsk:recipes:invariant
title: Throwing errors with Facebook's invariant library ∙ Babel Starter Kit
---

# Throwing errors with FB's <code>invariant</code> library

If you're familiar with Facebook's [React](https://github.com/facebook/react),
[React Native](https://github.com/facebook/react-native), [Flux](https://github.com/facebook/flux),
[Relay](https://github.com/facebook/relay) libraries, you might notice the extensive use of the
`invariant` function from `fbjs` npm module in their code bases. The goal of which is being able to
provide descriptive error messages for the development environment. These error messages are going
to be replaced by a single generic error when the project is compiled for production environments by
Babel and a module bundler, such as Webpack or Browserify. This allows to minimize the client-side
bundle size, and at the same time provide a good developer experience. 

Here is how it works. First, you need to install `fbjs` and `fbjs-scripts` npm modules by running:

```sh
$ npm install fbjs@next --save
$ npm install fbjs-scripts@next --save-dev
```

Then update Babel configuration located in `pacakge.json` file by including `dev-expression` plugin
from the `fbjs-scripts` npm module:

```json
{
  "babel": {
    "presets": [
      "es2015",
      "stage-0"
    ],
    "plugins": [
      "fbjs-scripts/babel-6/dev-expression",
      "transform-runtime"
    ]
  }
}
```

Now you can use the `invariant` helper function in your code as follows:

```js
import invariant from 'fbjs/lib/invariant'

class Greeting {

  constructor(name) {
    if (name) {
      invariant(
        typeof name === 'string' || name instanceof String,
        'The name argument must be a string'
      );
      this.name = name;
    } else {
      this.name = 'Guest';
    }
    this.name = name || 'Guest';
  }

  hello() {
    return `Welcome, ${this.name}!`;
  }

}

export default Greeting;
```

When you bundle your project for a production environment, you need to make sure that
`process.env.NODE_ENV` variable is set to `'production'`. Here is an example how to do it with
Webpack — [webpack.config.js#L28](https://github.com/kriasoft/react-starter-kit/blob/master/tools/webpack.config.js#L28)
in [React Starter Kit](https://www.reactstarterkit.com).
