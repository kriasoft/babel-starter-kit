---
id: bsk:recipes:mocha-jsdom
title: Testing with mocha and jsdom ∙ Babel Starter Kit
---

# Testing with mocha and jsdom 

For browser-specific code, such as the one that relies on `document`, `window` global variables and
DOM manipulation, you may want to consider using [jsdom](https://github.com/tmpvar/jsdom) library
that emulates browser environment, and in combination with [mocha-jsdom](https://github.com/rstacruz/mocha-jsdom),
can be fast and reliable tool for testing such type of code.

Let's see how it works on an example. Suppose you have a component that parses a URL string by
using [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
method as follows:

#### `src/parseUrl.js`

```js
function parseUrl(url) {
  const link = document.createElement('a');
  link.href = url;
  return {
    protocol: link.protocol,
    hostname: link.hostname,
    port: link.port,
    pathname: link.pathname,
    search: link.search,
    hash: link.hash,
    host: link.host
  };
}

export default parseUrl;
```

In order to create a unit test for this component, first we need to install `jsdom` and
`mocha-jsdom` npm modules by running:

```sh
npm install jsdom mocha-jsdom --save-dev
```

Then create a unit test for the component above.

#### `test/parseUrlSpec.js`

```js
import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import parseUrl from '../src/parseUrl';

describe('parseUrl', function() {

  jsdom(); // Emulates the browser environment

  it('should be able to parse a URL string', function() {
    const url = 'http://example.com:3000/pathname/?search=test#hash';
    const result = parseUrl(url);
    expect(result).to.be.deep.equal({
      protocol: 'http:',
      hostname: 'example.com',
      port: '3000',
      pathname: '/pathname/',
      search: '?search=test',
      hash: '#hash',
      host: 'example.com:3000'
    });
  });

});
```

Now when you run `npm test`, the unit test above should pass just fine, as if it was executed in a
browser.
