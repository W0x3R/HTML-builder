
const path = require('path');
const filePath =  path.join(__dirname, 'files');
const filePathCopy =  path.join(__dirname, 'files-copy');
const fs = require('fs');
const fsPromises = require('fs/promises');



(async () => {
  await fsPromises.mkdir(path.join(filePathCopy),
    { recursive: true });
  const copyDirection = await fsPromises.readdir(path.join(filePathCopy));
  for (let file of copyDirection) {
    await fsPromises.rm(path.join(filePathCopy, file),
      { force: true });
  }
  const copyFiles = await fsPromises.readdir(path.join(filePath));
  copyFiles.forEach(async(file) => {
    await fsPromises.copyFile(path.join(filePath, file), path.join(filePathCopy, file));
  });
})();