const sequelize = require('./dbModel.js');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
  login: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  avatar_url: {
    type: Sequelize.STRING
  },
  access_token: {
    type: Sequelize.STRING
  }
});

module.exports = User;