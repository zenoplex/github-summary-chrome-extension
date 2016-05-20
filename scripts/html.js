const chalk = require('chalk');
const { exec } = require('child_process');
const { NODE_ENV } = process.env;
const type = NODE_ENV === 'production' ? 'prod' : 'dev';
const out = NODE_ENV === 'production' ? 'build' : 'dev';

exec(`pug -O "{ env: '${type}' }" chrome/views/pages --out ${out}`, (err, stdout) => {
  if (err) console.log(chalk.red(err));

  console.log(stdout);
});
