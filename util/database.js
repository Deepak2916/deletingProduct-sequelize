const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-sql', 'root', 'Deepak@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
