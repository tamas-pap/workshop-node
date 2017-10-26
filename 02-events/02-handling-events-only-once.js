const EventEmitter = require('events').EventEmitter;

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

myEmitter.once('event', (a, b) => {
  console.log('An event occurred.', a, b);
});

myEmitter.emit('event', 'a', 'b');
myEmitter.emit('event', 'x', 'y');
