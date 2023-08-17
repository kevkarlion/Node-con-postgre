//Configuramos nuestras migraciones
//Por ello necesitamos conectarnos
//Se definen las credenciales y las opciones de conexión a la base de datos
const { config } = require('../config/config');


/**
 * Se codifican las credenciales de usuario y
 * contraseña de la base de datos utilizando la función
 * encodeURIComponent. Esto es importante para que los caracteres
 * especiales en las credenciales no interfieran con la URL de conexión.
 * La codificación asegura que los caracteres que podrían tener un significado especial en una URL
 * o en otros contextos no se interpreten de manera incorrecta o causen problemas.
 */
const USER = encodeURIComponent(config.dbUser);

const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  //Ambiente
  development: {
    url: URI,
    /**
     * Cuando configuras el dialecto en Sequelize, le estás diciendo a la biblioteca cómo
     * debe comunicarse con la base de datos subyacente y cómo debe construir las consultas
     * en el lenguaje específico de ese DBMS
     */
    dialect: 'postgres',
  },
  //Ambiente
  production: {
    url: URI,
    dialect: 'postgres',
  }
};
