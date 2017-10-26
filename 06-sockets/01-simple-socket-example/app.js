const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);
console.log('Server listening on http://localhost:8080');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A new client connected.');
  
  socket.emit('messageFromServer', { hello: 'world' });
  
  socket.on('messageFromClient', (data) => {
    console.log('Message from client', data);
  });
  
  socket.on('disconnect', () => {
    console.log('The user disconnected.');
  });
});
