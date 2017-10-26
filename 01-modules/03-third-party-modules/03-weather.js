const request = require('request');

request('https://api.github.com/users/tamaspap', {headers: {'User-Agent': 'NodeJS'}, json: true}, (err, response, body) => {
  console.log(body);
});
