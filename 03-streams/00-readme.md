# Streams

* [Official Documentation](https://nodejs.org/api/stream.html)
* [Piping streams](./assets/streams.png)

* Streams are instances of (and extensions to) EventEmitter with an agreed upon interface
* A unified abstraction for managing data flow, including: 
    * Network traffic (http, tcp, etc.)
    * File I/O
    * stdin / stdout / stderr
    * ... and more!
* A stream in an instance of either
    * ReadableStream
    * WritableStream
    * ... or both!  
* A ReadableStream can be `piped` to a WritableStream
    * Applies "backpressure" (ReadableStream provides data faster than a WritableStream can consume). For example when you want to upload a file to an endpoint, you can read from the file much faster than you can upload it.
         
#### ReadableStream
* readable [boolean]
* event: 'data'
* event: 'end'
* event: 'error'
* event: 'close'
* pause()
* resume()
* destroy()
* pipe()

#### WritableStream
* writable [boolean]
* event: 'drain'
* event: 'error'
* event: 'close'
* event: 'pipe'
* write()
* end()
* destroy()
