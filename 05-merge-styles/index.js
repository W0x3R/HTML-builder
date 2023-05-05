const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
const style = 'styles';
const projectDist = 'project-dist';
const bundleCss = 'bundle.css';


(async () => {
  const stylesPath = await fsPromises.readdir(path.join(__dirname, style), 
  {withFileTypes: true});
  const checkTruthy = stylesPath.filter(elem => elem.isFile() && path.extname(elem.name) === '.css')
  const stylesCssFiles = checkTruthy;
  const fileNames = stylesCssFiles.map(elem => elem.name)
  let bundleInner;

  for (const file of fileNames) {
    const contentFromFile = await fsPromises.readFile(path.join(__dirname, style, file),
      {encoding: 'utf8'});
    bundleInner += contentFromFile;
  }

  await fsPromises.writeFile(path.join(__dirname, projectDist, bundleCss), bundleInner);
})();