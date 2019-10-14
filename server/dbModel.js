const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://qidyetsfvczuwx:800b76c38416b1cf8f67737da25a6d74560261f04091ac905b5cc66325eed8c2@ec2-54-163-227-205.compute-1.amazonaws.com:5432/d51lgj66dkcbfv', {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
      ssl: true
  }
});

sequelize.sync({ logging: console.log }).then(() => {
});

module.exports = sequelize;