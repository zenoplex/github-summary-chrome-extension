const createWebpackServer = require('webpack-httpolyglot-server');
const config = require('../webpack.config');
// const config = require('../webpack/dev.config');
const fs = require('fs.extra');

function build() {
  require('./replace-webpack');
  require('./copy-assets');
  require('./html');

  createWebpackServer(config, {
    host: 'localhost',
    port: 3000,
  });
}

fs.rmrf('dev', build);
