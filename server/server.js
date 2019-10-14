//https://socket.io/docs/
const app = require('express')();
const server = require('http').Server(app);
let io = require('socket.io')(server)

const fetch = require('node-fetch');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 4000;

const authController = require('./authController.js');
const cookieController = require('./cookieController.js');

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/api', (req, res) => {
  console.log("api endpoint");
  return res.status(200).json({ 'hello': true });
});

// app.get('/create', authController.createDummy);

app.get('/api/auth/github/callback',
  authController.getTokenJSON,
  authController.getUserProfile,
  authController.createUser,
  cookieController.setUserIDCookie
);


app.get('/user/profile', cookieController.getInfofromCookie);

server.listen(PORT, () => {
  console.log('Server listening on ', PORT);
});

io.on('connection', function (socket) {
  socket.on("clickedLetter", function (letter) {
    console.log("recived", letter);
    io.sockets.emit("clickedLetter", letter);
  });
})
