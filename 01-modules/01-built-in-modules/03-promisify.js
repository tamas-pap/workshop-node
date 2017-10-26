const dns = require('dns');
const promisify = require('util').promisify;

const dnsLookup = promisify(dns.lookup);

dnsLookup('nodejs.org')
  .then((result) => {
    console.log('address: %j family: IPv%s', result.address, result.family);
  })
  .catch(error => {
    console.error('Error', error);
  });
