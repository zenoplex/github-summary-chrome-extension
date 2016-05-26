const fs = require('fs.extra');
const { exec } = require('child_process');
const chalk = require('chalk');

function build() {
  require('./replace-webpack');
  require('./copy-assets');
  require('./html');

  exec('webpack --config webpack.config.prod.js --progress --profile --colors', (err, stdout) => {
    if (err) console.log(chalk.red(err));

    console.log(stdout);
  });
}

fs.rmrf('build', build);
