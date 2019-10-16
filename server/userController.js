const client = require('./wordModel.js');
const userCtrl = {};

userCtrl.addUser = (request, response) => {
  const { name, password } = request.body;
  const text = 'INSERT INTO users (name, password) VALUES ($1, $2)';
  client.query(text, [name, password], (err, result) => {
    if (err) console.log('addUser error', err);
    else {
      response.status(201).send(`User added: ${result}`);
      console.log('user added =>', result);
    }
  });
};

userCtrl.getTopTen = (request, response) => {
  const text = 'SELECT * FROM users ORDER BY score LIMIT 10';
  client.query(text, [score], (err, result) => {
    if (err) console.log('getTopTen error', err);
    else {
      response.status(200).json(result);
    }
  });
};

userCtrl.updateUser = (request, response) => {
  // need to get the actual score from somewhere
  const score = parseInt(request.params.score);
  const { name, password } = request.body;

  client.query(
    'UPDATE users SET name = $1, password = $2 WHERE score = $3',
    [name, password, score],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User Score Updated: ${score}`);
    }
  );
};

module.exports = userCtrl;
