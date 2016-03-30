/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Greeting from '../src/Greeting';

describe('Greeting', () => {

  it('Can say hello', () => {
    const greeting = new Greeting();
    const message = greeting.hello();
    expect(message).to.be.equal('Welcome, Guest!');
  });

});
