//--Este archivo se encarga de enviar la conexion hacia los modelos
//Con esto va a poder a hacer el mapeo y serializacion de datos.

//Usa el esquema y también la configuración
//que le proporcioné a la conexión de la db con sequelize


//Modelos
const { User, UserSchema } = require('./user.model');

//Setup Inicial
function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
