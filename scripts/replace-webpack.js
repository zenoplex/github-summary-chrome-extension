const fs = require('fs.extra');
const chalk = require('chalk');

const replaceTasks = [{
  from: 'webpack/replace/JsonpMainTemplate.runtime.js',
  to:   'node_modules/webpack/lib/JsonpMainTemplate.runtime.js',
}, {
  from: 'webpack/replace/log-apply-result.js',
  to:   'node_modules/webpack/hot/log-apply-result.js',
}];

replaceTasks.forEach(({ from, to }) => fs.copy(from, to, { replace: true }, (err) => {
  if (err) console.log(chalk.red(err));
}));
