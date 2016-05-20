const fs = require('fs.extra');

const { NODE_ENV } = process.env;
const type = NODE_ENV === 'production' ? 'prod' : 'dev';
const out = NODE_ENV === 'production' ? 'build' : 'dev';

fs.mkdir(out, () => {});
fs.copy(`chrome/manifest.${type}.json`, `${out}/manifest.json`, () => {});
fs.copyRecursive('chrome/assets', out, () => {});
