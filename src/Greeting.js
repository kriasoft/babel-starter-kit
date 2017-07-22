/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

class Greeting {
  constructor(name) {
    this.name = name || 'Guest';
  }

  hello() {
    return `Welcome, ${this.name}!`;
  }
}

export default Greeting;
