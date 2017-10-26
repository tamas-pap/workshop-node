const request = require('request');
const stream = request('http://www.google.com');

stream.pipe(process.stdout);
