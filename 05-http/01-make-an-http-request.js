const http = require('http');

console.log('Going to make request..');

/**
 * Request: writable stream
 * Response: readable stream
 */
const request = http.get('http://google.com', function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});
