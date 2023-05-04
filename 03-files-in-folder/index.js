const fs = require('fs');
const fsPromise = require('fs/promises');
const path = require('path');
const directoryPath = path.join(__dirname, 'secret-folder');
const {stdout} = process;

// eslint-disable-next-line no-unexpected-multiline
(async function seeAllAboutFile () {
  const files = await fsPromise.readdir(directoryPath, {withFileTypes: true},
    (err) => {if(err) throw err;});
  for (const file of files){
    if (file.isFile()) {
      fs.stat(path.join(directoryPath, file.name),
        (err, stat) => {
          if (!err) stdout.write(`${file.name.split('.')[0]} - ${path.extname(file.name).slice(1)} - ${(stat.size / 1000).toFixed(1)} kb\n`);
        });
    }
  }
})();

