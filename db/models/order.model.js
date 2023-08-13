const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDER_TABLE = 'orders';

const { CUSTOMER_TABLE } = require('./customer.model')

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    // unique: true,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },

};

class Order extends Model {
  static associate(model) {

    this.belongsTo(model.Customer, { as: 'customer' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,

      //modelName es el nombre con el que va a guardar el modelo,
      //luego cuando lo invoquemos, será con este nombre
      modelName: 'Order',

      //Marcas de tiempo automaticas.
      timestamps: false
    }
  }
}

module.exports = { OrderSchema, Order, ORDER_TABLE };
