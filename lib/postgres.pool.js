//Podemos usar getConnection en nuestros servicios.

const { Pool } = require('pg');


  const pool = new Pool ({
    //Configuracion de la conexion
    host: 'localhost',
    port: 5432,
    user: 'kevin',
    password: 'admin123',
    database: 'my_store'
  });

module.exports = pool;


