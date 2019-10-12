//https://socket.io/docs/
const app = require('express')();
const server = require('http').Server(app);
let io = require('socket.io')(server)
const PORT = 4000;

app.get('/api', (req, res) => {
  console.log("api endpoint");
  return res.status(200).json({ 'hello': true });
});

server.listen(PORT, () => {
  console.log('Server listening on ', PORT);
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  })
})
