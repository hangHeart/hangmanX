const fetch = require('node-fetch');
const User = require('./userModel.js');

const auth = {};

auth.getTokenJSON = async (req, res, next) => {

  await fetch(`https://github.com/login/oauth/access_token?client_id=6299af3a88a73b2fd148&client_secret=ad85910bc7aa35a7477c0c4fdc888e8e9ddf9b36&code=${req.query.code}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    }
  }
  ).then((response) => {
    return response.json();
  }).then((response2) => {
    res.locals.token = response2.access_token;
    return next();
  }).catch(err => {
    console.log("error in getTokenJSON", err);
  })
}

auth.getUserProfile = (req, res, next) => {
  const access_token = res.locals.token;

  const userProfile = fetch('https://api.github.com/user', {
    headers: {
      'Authorization': `token ${access_token}`,
      'Content-Type': 'application/json'
    },            
  }).then(response => {
    return response.json();
  }).then(userProfile => {
    console.log()
    res.locals.userProfile = userProfile;
    return next();
  }).catch(err => {
    console.log("error in getTokenJSON", err);
  });
}

auth.createUser = (req, res, next) => {

  const userProfile = res.locals.userProfile;

  const { login, name, avatar_url } = userProfile;
  const access_token = res.locals.token;

  User
  .findOrCreate({
    where: { login },
    defaults: {
      name,
      avatar_url,
      access_token
    }
  })
    .then(([user, created]) => {
      res.locals.userID = user.id;
      return next();
    }).catch(err => {
      console.log("Err at adding user to database", err);
    })
  
}



auth.createDummy = (req, res, next) => {
  User
    .findOrCreate({
      where: { login: 'yyyy' },
      defaults: {
        access_token: 'Technical Lead JavaScript',
        avatar_url: 'egegege',
      }
    })
    .then(([user, created]) => {
      console.log(user.get({
        plain: true
      }))
    });
}

module.exports = auth;