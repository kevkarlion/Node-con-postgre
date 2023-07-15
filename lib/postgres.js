//Podemos usar getConnection en nuestros servicios.

const { Client } = require('pg');

async function getConnection () {
  const client = new Client ({
    //Configuracion de la conexion
    host: 'localhost',
    port: 5432,
    user: 'kevin',
    password: 'admin123',
    database: 'my_store'
  });

  await client.connect();
  return client;
}

module.exports = getConnection;


