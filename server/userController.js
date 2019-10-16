const client = require('./wordModel.js');
const userCtrl = {};

userCtrl.addUser = (request, response) => {
  const { name, password } = request.body;
  // console.log('request.body', request.body);

  const text = 'INSERT INTO users (name, password) VALUES ($1, $2)';
  //  WHERE NOT EXISTS (SELECT * FROM users WHERE name=$1 password=$2)
  client.query(text, [name, password], (err, result) => {
    if (err) console.log('addUser error', err);
    else {
      response.status(201).send(`User added: ${result}`);
      console.log('user added =>');
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
    'UPDATE users SET score = $3 WHERE name = $1 AND password = $2',
    [name, password, score],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User Score Updated: ${score}`);
      console.log('score updated:', score);
    }
  );
};

module.exports = userCtrl;
