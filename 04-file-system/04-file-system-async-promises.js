const promisify = require('util.promisify-all');
const fs = promisify(require('fs'));

async function createMoviesTxt() {
  const folderExists = await fs.exists('temp');
  if (folderExists) {
    console.log('Temp directory exists, removing it..');
    const fileExists = await fs.exists('temp/movies.txt');
    if (fileExists) {
      await fs.unlink('temp/movies.txt');
    }
    
    await fs.rmdir('temp');
  }
  
  await fs.mkdir('temp');
  process.chdir('temp');
  await fs.writeFile('films.txt', 'Sample content...');
  await fs.rename('films.txt', 'movies.txt');
  
  const stats = await fs.stat('movies.txt');
  console.log('File size: ' + stats.size + ' bytes');
  
  const data = await fs.readFile('movies.txt');
  console.log('File contents: ' + data.toString());
}

createMoviesTxt()
  .catch(err => {
    console.error('Error', err);
  });
