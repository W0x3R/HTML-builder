const fs = require('fs');
const path = require('path');

const {stdout} = process;

const pathToFile = path.join(__dirname, 'text.txt');

const readStream = fs.createReadStream(pathToFile, 'utf-8');
readStream.on('data', (str) => stdout.write(str))