const fs = require('fs');

fs.exists('temp', folderExists => {
  if (folderExists) {
    console.log('Temp directory exists, removing it..');
    fs.exists('temp/movies.txt', fileExists => {
      if (fileExists) {
        fs.unlink('temp/movies.txt', () => {
          fs.rmdir('temp', createMovieTxt);
        });
      } else {
        fs.rmdir('temp', createMovieTxt);
      }
    });
  }
});

function createMovieTxt() {
  fs.mkdir('temp', function() {
    process.chdir('temp');
    fs.writeFile('films.txt', 'Sample content...', function() {
      fs.rename('films.txt', 'movies.txt', function() {
        fs.stat('movies.txt', function(error, stats) {
          console.log('File size: ' + stats.size + ' bytes');
          fs.readFile('movies.txt', function(error, data) {
            console.log('File contents: ' + data.toString());
          });
        });
      });
    });
  });
}

// This looks horrible, let's rewrite it with promises & async/await
