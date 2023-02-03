require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize (
  
  {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    });

module.exports = sequelize;
