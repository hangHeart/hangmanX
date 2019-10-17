const client = require('./wordModel.js');
const userCtrl = {};

userCtrl.getUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log('testing if hit');
  let queryString = 'SELECT * FROM users WHERE name = ($1)';

  client.query(queryString, [username], (err, results) => {
    if (err) {
      console.log('createUser error', err);
    } else {
      console.log('testing results', results);
      console.log('this is rows: ', results.rows);
      //console.log('check here ==>',results.rows[0].password)
      console.log('is this 0?: ', results.rows.length);
      if (results.rows.length !== 0 && results.rows[0].password === password) {
        console.log('new test');
        let responseObj = {
          username: results.rows[0].name,
          password: results.rows[0].password,
        };
        res.locals.getUser = responseObj;
        console.log('test 2', res.locals.getUser);
      } else {
        res.locals.getUser = { failure: true };
      }
      return next();
    }
    console.log('hit rock bottom');
    // return next();
  });
};

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

userCtrl.verifyUser = (request, response) => {
  const { name, password } = request.body;
  // console.log('request.body', request.body);

  const text = 'SELECT COUNT(*) FROM users WHERE (name=$1 AND password=$2)';
  client.query(text, [name, password], (err, result) => {
    if (err) console.log('addUser error', err);
    else {
      response.status(201).send(`User verified: ${result}`);
      console.log('user VERIFIED', result.rowCount);
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
