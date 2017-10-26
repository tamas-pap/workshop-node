const fs = require('fs');

if (fs.existsSync('temp')) {
  console.log('Temp directory exists, removing it..');
  if (fs.existsSync('temp/movies.txt')) {
    fs.unlinkSync('temp/movies.txt');
  }
  
  fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
process.chdir('temp');
fs.writeFileSync('films.txt', 'Movie list here...');
fs.renameSync('films.txt', 'movies.txt');
console.log('File size: ' + fs.statSync('movies.txt').size + ' bytes');
console.log('File contents: ' + fs.readFileSync('movies.txt').toString());
