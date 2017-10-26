const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);
console.log('Server listening on http://localhost:8080');

app.get('/desktop', (req, res) => {
  res.sendFile(__dirname + '/desktop.html');
});

app.get('/mobile', (req, res) => {
  res.sendFile(__dirname + '/mobile.html');
});


io.on('connection', (socket) => {
  console.log('A new client connected.');
  socket.on('orientationChange', (data) => {
    socket.broadcast.emit('orientationChange', data);
  });
});
