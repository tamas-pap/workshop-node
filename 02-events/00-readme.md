# Events

[Official Documentation](https://nodejs.org/api/events.html)

Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds 
of objects (called "emitters") periodically emit named events that cause Function objects ("listeners") to be called.

For instance: a net.Server object emits an event each time a peer connects to it; a fs.ReadStream emits an event when 
the file is opened; a stream emits an event whenever data is available to be read.

All objects that emit events are instances of the EventEmitter class.
