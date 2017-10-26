const fs = require('fs');
const http = require('http');

/**
 * Request: readable stream
 * Response: writable stream
 */
http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  if (request.url === '/file') {
    fs.createReadStream('file.txt').pipe(response);
  } else {
    response.end('Hello world!');
  }
  
}).listen(8080);

console.log('Server running on http://localhost:8080');
