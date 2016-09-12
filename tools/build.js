/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import fs from 'fs-promise';
import del from 'del';
import rollup from 'rollup';
import babel from 'rollup-plugin-babel';
import pkg from '../package.json';

// Transpile source code into a distributable format with Babel.
async function transpile() {
  for (const format of ['es6', 'cjs', 'umd']) {
    // bundle the source.
    const bundle = await rollup.rollup({
      entry: 'src/index.js',
      external: Object.keys(pkg.dependencies),
      plugins: [babel(Object.assign(pkg.babel, {
        babelrc: false,
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        presets: pkg.babel.presets.map(x => (x === 'es2015' ? 'es2015-rollup' : x)),
      }))],
    });

    // write the bundle, generating source maps.
    await bundle.write({
      dest: `dist/${format === 'cjs' ? 'index' : `index.${format}`}.js`,
      format,
      sourceMap: true,
      moduleName: format === 'umd' ? pkg.name : undefined,
    });
  }
}

// Copy package.json and LICENSE.txt.
async function copyPackageFiles() {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  await fs.writeFile('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf-8');
  await fs.writeFile('dist/LICENSE.txt', await fs.readFile('LICENSE.txt', 'utf-8'), 'utf-8');
}

// execute as an IIFE: Immediately-Invoked Function Expression (IIFE)
(async function main() {
  try {
    // Clean up the output directory
    del(['dist/*']);

    // transpile with babel
    await transpile();

    // copy package files
    await copyPackageFiles();
  } catch (error) {
    console.error(`Error: ${error}`); // eslint-disable-line no-console
  }
}());

