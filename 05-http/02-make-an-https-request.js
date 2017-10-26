const https = require('https');

console.log('Going to make request..');

/**
 * Request: writable stream
 * Response: readable stream
 */
const request = https.get('https://github.com', function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});
