
const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require("./../../lib/sequelize");



const CATEGORY_TABLE = 'category';


const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING
  },
  img: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
};

class Category extends Model{
  static associate(){

  };

  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: true,
    };
  };
};

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
