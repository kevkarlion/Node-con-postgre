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

/**
 *  la conexión a la base de datos se establece utilizando
 *  el código que proporcionaste, y permanecerá abierta hasta
 *  que la cierres explícitamente. Durante el tiempo en que la
 *  conexión está abierta, puedes realizar varias tareas con la
 *  conexión, como enviar consultas y recibir resultados de la
 *  base de datos.
 */
