//https://socket.io/docs/
const path = require('path');
const express = require('express')
const app = express();
const server = require('http').Server(app);
let io = require('socket.io')(server)

const fetch = require('node-fetch');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 80;

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
  cookieController.setUserIDCookie,
  authController.redirectAfterLogin
);

// For Build
// For adding a new remote to heroku : heroku git:remote -a hangmanx-cs
// push the branch adam-rajeeb/heroku-deployment to heroku remote's master branch : git push heroku adam-rajeeb/heroku-deployment:master
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// app.use('/game', (req,res) =>{
//   res
//   .status(200)
//   .send()
// })

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
