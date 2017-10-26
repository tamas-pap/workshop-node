const EventEmitter = require('events').EventEmitter;

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
  console.log('An event occurred.', a, b);
});

// To make sure the Node process doesn't exist, we can listen to
// `uncaughtException` on the process, but the best practice is to always have an event
// listener that listens to the `error` event on the emitter.

// process.on('uncaughtException', (err) => {
//   console.error('whoops! there was an error');
// });

// myEmitter.on('error', (err) => {
//   console.error('whoops! there was an error');
// });

myEmitter.emit('event', 'a', 'b');

// When an error occurs within an EventEmitter instance, the typical action is for an 'error' event to be emitted.
// These are treated as special cases within Node.js.
myEmitter.emit('error', new Error('whoops!')); // The Node process exists
