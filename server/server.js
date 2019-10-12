//https://socket.io/docs/
const app = require('express')();
const server = require('http').Server(app);
let io = require('socket.io')(server)

const fetch = require('node-fetch');

const bodyParser = require('body-parser');
const PORT = 4000;


app.use(bodyParser.json());

app.get('/api', (req, res) => {
  console.log("api endpoint");
  return res.status(200).json({ 'hello': true });
});

app.get('/api/auth/github/callback', async(req, res, next) => {
  
  const getTokenJSON = await fetch(`https://github.com/login/oauth/access_token?client_id=6299af3a88a73b2fd148&client_secret=ad85910bc7aa35a7477c0c4fdc888e8e9ddf9b36&code=${req.query.code}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    }
  }
  ).then((response) => {
    return response.json();
  }).then((response2) => {
    console.log(response2);
  })

  res.end();

})

server.listen(PORT, () => {
  console.log('Server listening on ', PORT);
});

io.on('connection', function (socket) {
  socket.on('my other event', function (data) {
    console.log("new");
    console.log(data);
  });

  socket.on("changeColor", function (color) {
    io.sockets.emit('changeColor', color);
  });
})
