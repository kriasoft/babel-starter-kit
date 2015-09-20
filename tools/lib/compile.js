/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */

import browserify from 'browserify';
import babelify from 'babelify';
import fm from 'front-matter';
import template from 'lodash.template';
import Markdown from 'markdown-it';
import hljs from 'highlight.js';
import fs from './fs';

const postcss = require('postcss')([
  require('postcss-import')(),
  require('postcss-nested')(),
  require('postcss-cssnext')({autoprefixer: [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1',
  ]}),
  require('cssnano')(),
]);

const markdown = new Markdown({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (_) {} // eslint-disable-line no-empty
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (_) {} // eslint-disable-line no-empty

    return ''; // use external default escaping
  },
});

const md = async (source, data) => {
  const layout = template(await fs.readFile('./docs/index.html'));
  const content = fm(source);
  Object.assign(content.attributes, data);
  const body = markdown.render(content.body);
  return layout(Object.assign(content.attributes, { body }));
};

const css = async (source, options) => {
  options = options || {}; // eslint-disable-line no-param-reassign
  const result = await postcss.process(source, {
    from: 'docs/css/main.css',
    to: 'docs/css/main.min.css',
    map: !!options.map,
  });
  return result.css;
};

const js = async (options) => new Promise((resolve, reject) => {
  options = options || {}; // eslint-disable-line no-param-reassign
  browserify('docs/js/main.js', {
    debug: !!options.debug,
    transform: [babelify],
  }).bundle((err, buffer) =>
    err ? reject(err) : resolve(buffer.toString('utf8'))
  );
});

export default { md, css, js };
