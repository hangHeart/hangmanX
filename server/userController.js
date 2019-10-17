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

userCtrl.addUser = (request, response, next) => {
  const { name, password } = request.body;
  console.log('request.body', request.body);

  const text = 'INSERT INTO users (name, password, score) VALUES ($1, $2, $3)';
  //  WHERE NOT EXISTS (SELECT * FROM users WHERE name=$1 password=$2)
  client.query(text, [name, password, 0], (err, result) => {
    if (err) console.log('addUser error', err);
    else {
      response.json({ success: true });
      console.log('user added =>');
    }
    return next();
  });
};

userCtrl.verifyUser = (request, response) => {
  const { name, password } = request.body;
  // console.log('request.body', request.body);

  const text = 'SELECT COUNT(*) FROM users WHERE (name=$1 AND password=$2)';
  client.query(text, [name, password, 0], (err, result) => {
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
  // const score = parseInt(request.params.score);
  const { name, password } = request.body;
  // SELECT ID, name, password, score+10 AS score from users
  //'SELECT * FROM users WHERE name = ($1)';
  //'UPDATE users SET score+10 WHERE name = $1 AND password = $2'
  client.query(
    `UPDATE users SET score = score+10 WHERE name = '${name}'`,
    // [name, password, score],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        response.status(200).send(`User Score Updated: ${results}`);
        console.log('score updated =>');
      }
    }
  );
};

module.exports = userCtrl;
