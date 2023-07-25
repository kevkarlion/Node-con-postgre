//Podemos usar getConnection en nuestros servicios.
//Con pg hacemos la conexion por medio de node,
//a nuestro servidor.

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


