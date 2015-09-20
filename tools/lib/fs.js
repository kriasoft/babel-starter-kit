/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */

import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

const exists = filename => new Promise(resolve => {
  fs.exists(filename, resolve);
});

const isDirectory = filename => new Promise((resolve, reject) => {
  fs.stat(filename, (err, stat) =>
    err ? reject(err) : resolve(stat && stat.isDirectory())
  );
});

const readDir = directory => new Promise((resolve, reject) => {
  fs.readdir(directory, (err, files) =>
    err ? reject(err) : resolve(files)
  );
});

const getFiles = async (directory) => {
  let files = [];
  const join = (dir, filename) => path.join(dir, filename);
  for (const file of await readDir(directory)) {
    const fullPath = path.resolve(directory, file);
    if (await isDirectory(fullPath)) {
      files = files.concat((await getFiles(fullPath)).map(join.bind(null, file)));
    } else {
      files = files.concat(file);
    }
  }
  return files;
};

const readFile = filename => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf8', (err, contents) =>
    err ? reject(err) : resolve(contents)
  );
});

const writeFile = (filename, contents) => new Promise((resolve, reject) => {
  fs.writeFile(filename, contents, 'utf8', err =>
    err ? reject(err) : resolve()
  );
});

const makeDir = name => new Promise((resolve, reject) => {
  mkdirp(name, err => err ? reject(err) : resolve());
});

const copyFile = (src, dest) => new Promise((resolve, reject) => {
  let finished = false;
  const done = err => {
    if (!finished) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
      finished = true;
    }
  };

  makeDir(path.dirname(dest)).then(() => {
    const rd = fs.createReadStream(src);
    rd.on('error', (err) => {
      done(err);
    });

    const wr = fs.createWriteStream(dest);
    wr.on('error', (err) => {
      done(err);
    });
    wr.on('close', () => {
      done();
    });
    rd.pipe(wr);
  }).catch(err => reject(err));
});

export default { exists, getFiles, readFile, writeFile, makeDir, copyFile };
