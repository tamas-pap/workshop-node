const request = require('request');
const fs = require('fs');
const zlib = require('zlib');

request('http://www.google.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('google.html.gz'));
