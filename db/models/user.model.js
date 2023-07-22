//Este archivo definirá el modelo de la tabla de usuarios
//Creo el esquema

const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../lib/sequelize');


//-- Nombre de nuestra tabla
const USER_TABLE = 'users';

//-- Esquema que define la estructura de la db
const UserSchema = {
  // Definimos la estructura de la tabla
  //Atributos

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  //Es un campo que contiene informacion sobre
  //la fecha en que se creo el campo
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}


//-- Definimos una clase con nuestro Modelo
// IMPORTANTE! El Model tiene todas las formas en que vamos a hacer querys
class User extends Model {
  static associate(){
    //associate
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,

      //modelName es el nombre con el que va a guardar el modelo,
      //luego cuando lo invoquemos, será con este nombre
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
