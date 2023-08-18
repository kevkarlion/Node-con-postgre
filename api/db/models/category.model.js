
const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'category';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
};




/**
 * this.hasMany(model.Product, {...}): Estás definiendo una relación de "uno a muchos" (hasMany) entre el modelo Category y el modelo Product. Esto significa que una categoría puede tener varios productos asociados.

{ as: 'products', foreignKey: 'categoryId' }: Aquí estás configurando los detalles de la asociación:

as: 'products': Estás asignando un alias a la asociación. Cuando accedas a esta asociación, podrás usar el alias para referirte a los productos asociados a una categoría específica.
foreignKey: 'categoryId': Indica que en la tabla de productos, habrá una columna llamada categoryId que actuará como clave foránea para establecer la relación con la tabla de categorías. Esta columna contendrá el ID de la categoría a la que pertenece cada producto.
 */

  class Category extends Model{

    static associate(model){
      /**
       * Una categoria puede tener muchos productos
       * Un producto, solo puede tener una categoria
       */
      this.hasMany(model.Product, {
        as: 'products',
        foreignKey: 'categoryId',
      })
    };

  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    };
  };
};

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
