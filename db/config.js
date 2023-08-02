//Configuramos nuestras migraciones
//Por ello necesitamos conectarnos
//Se definen las credenciales y las opciones de conexión a la base de datos
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  //Ambiente
  development: {
    url: URI,
    dialect: 'postgres',
  },
  //Ambiente
  production: {
    url: URI,
    dialect: 'postgres',
  }
};
