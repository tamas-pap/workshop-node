const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

/**
 * Request: readable stream
 * Response: writable stream
 */
https.createServer(options, (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  if (request.url === '/file') {
    fs.createReadStream('file.txt').pipe(response);
  } else {
    response.end('Hello world!');
  }
  
}).listen(8080);

console.log('Server running on https://localhost:8080');