const fs = require('fs');
const path = require('path');

const {stdin, stdout, exit} = process;

const createFile = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Hello! Please,enter some text.\n');
stdin.on('data', (input) => {
  input.toString().trim() === 'exit' ? exit() : createFile.write(input);
});


process.on('exit', () => stdout.write('Bye-bye. Good luck!'));
process.on('SIGINT', exit);