//Aquí, configuraremos y conectaremos Sequelize con la base de datos
//Esta config se enviará a la función que hará el init.

const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');


//Le doy seguridad con encodeURIComponent
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


//Gestiona por detras el pooling
//Configuracion de la base de datos
//Le envio mis datos de la base de datos, en este caso URI.
const sequelize = new Sequelize(URI, {
  //dialect nos dice que base de datos estamos
  //utilizando
  dialect: 'postgres',
  logging: true
});


//Gestiona toda la config y luego vuelve a la secuencia
//de ejecucion, hacia sequelize.sync.
setupModels(sequelize);

sequelize.sync();



/**Finalmente, se exporta la instancia de Sequelize sequelize, que ahora está configurada y lista para interactuar con la base de datos, incluyendo los modelos configurados y la tabla de usuarios creada. */
module.exports = sequelize;
