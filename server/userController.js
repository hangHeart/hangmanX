const client = require('./wordModel.js');
const userCtrl = {};

userCtrl.addUser = values => {
  const text = 'INSERT INTO users (name, password) VALUES ($1, $2)';
  client.query(text, values, (err, result) => {
    if (err) console.log('ROW error', err);
    else {
      console.log('user added =>', result);
    }
  });
};

userCtrl.getUser = values => {
  const text = 'SELECT * FROM users';
  client.query(text, values, (err, result) => {
    if (err) console.log('ROW error', err);
    else {
      return result;
    }
  });
};

userCtrl.addUser(['Andrew', 'Andrew']);

module.exports = userCtrl;
