const fs = require('fs');
const ChromeExtension = require('crx');
const argv = require('minimist')(process.argv.slice(2));

const keyPath = argv.key || 'key.pem';
const existsKey = fs.existsSync(keyPath);
const crx = new ChromeExtension({
  appId:      argv['app-id'],
  codebase:   argv.codebase,
  privateKey: existsKey ? fs.readFileSync(keyPath) : null,
});

crx.load('build')
  .then(() => crx.loadContents())
  .then(archiveBuffer => {
    /* eslint-disable import/no-unresolved */
    const { name } = require('../build/manifest.json');
    /* eslint-enable */

    fs.writeFile(`${name}.zip`, archiveBuffer);

    if (!argv.codebase || !existsKey) return;
    crx.pack(archiveBuffer).then(crxBuffer => {
      const updateXML = crx.generateUpdateXML();

      fs.writeFile('update.xml', updateXML);
      fs.writeFile(`${name}.crx`, crxBuffer);
    });
  });
