const EventEmitter = require('events').EventEmitter;

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
  console.log('An event occurred.', a, b);
});

myEmitter.emit('event', 'a', 'b');
