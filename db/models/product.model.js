const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../../lib/sequelize');

const sequelize = require('../../lib/sequelize');

const PRODUCT_TABLE = 'products';

const productsSchema = {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  descrption: {
    type: DataTypes.TEXT
  },
};

class Products extends Model {
  static associate(){
    //associate
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,

      //modelName es el nombre con el que va a guardar el modelo,
      //luego cuando lo invoquemos, será con este nombre
      modelName: 'Products',
      timestamps: false
    }
  }
}

module.exports = { productsSchema, Products,PRODUCT_TABLE };
