//Podemos usar getConnection en nuestros servicios.

const { Pool } = require('pg');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);


const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//Nueva manera de enviar los datos a nuestra app de manera mas segura.
//Usamos vaiables de entorno.
const pool = new Pool ({ connectionString: URI });


//Configuracion previa a variables de entorno, estabamos
//quemando los datos sensibles. Es una mala practica
// const pool = new Pool ({
//   //Configuracion de la conexion
//   host: 'localhost',
//   port: 5432,
//   user: 'kevin',
//   password: 'admin123',
//   database: 'my_store'
// });

module.exports = pool;


