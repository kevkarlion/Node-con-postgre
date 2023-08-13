//--Este archivo se encarga de enviar la conexion hacia los modelos
//Con esto va a poder a hacer el mapeo y serializacion de datos.

//Usa el esquema y también la configuración
//que le proporcioné a la conexión de la db con sequelize


//Modelos
const { User, UserSchema } = require('./user.model');
const { Products, ProductsSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');



//Setup Inicial
function setupModels(sequelize) {

  //Primer parametro -> Esquema o definicion del modelo. Se define usando un
  //objeto JSON.
  //Segundo parametro -> Configuracion especifica para la db, se define
  //tambien, usando un tipo JSON.
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Products.init(ProductsSchema, Products.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));



  /**Esto establece las asociaciones o relaciones entre los modelos. Aquí, Customer es el modelo que estamos asociando, y sequelize.models es un objeto que contiene todos los modelos definidos. Esto es necesario para definir las relaciones entre los modelos. */
  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Products.associate(sequelize.models);
  Order.associate(sequelize.models);



}

module.exports = setupModels;


/**Asociación con la Base de Datos:
Al llamar al método init, Sequelize utiliza el esquema UserSchema para configurar el modelo y vincularlo con la conexión de la base de datos representada por sequelize. Esto implica que Sequelize crea la tabla en la base de datos según la estructura definida en UserSchema y también establece la conexión entre el modelo User en JavaScript y la tabla en la base de datos.

Modelo Listo para Usar:
Después de llamar a init, el modelo User estará listo para interactuar con la base de datos. Podrás realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando el modelo User, y Sequelize traducirá esas operaciones en consultas SQL apropiadas para interactuar con la tabla en la base de datos.

En resumen, al utilizar el método init, estamos configurando el modelo User con su estructura definida en UserSchema, y lo vinculamos a la conexión de datos proporcionada por Sequelize. Esto permite que el modelo interactúe con la base de datos de manera adecuada y facilite las operaciones en la tabla asociada al modelo */
