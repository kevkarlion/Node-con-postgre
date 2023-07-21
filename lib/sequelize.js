const { Sequelize } = require('sequelize');


const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//Gestiona por detras el pooling
const sequelize = new Sequelize(URI, {
  //dialect nos dice que base de datos estamos
  //utilizando
  dialect: 'postgres',
  logging: true
});

module.exports = sequelize;
