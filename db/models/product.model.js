const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../../lib/sequelize');

const PRODUCT_TABLE = 'products';

const ProductsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  imagen: {
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
};

class Products extends Model {
  static associate() {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,

      //modelName es el nombre con el que va a guardar el modelo,
      //luego cuando lo invoquemos, será con este nombre
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { ProductsSchema, Products, PRODUCT_TABLE };
