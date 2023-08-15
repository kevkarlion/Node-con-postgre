// const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');


// const sequelize = require('./../lib/sequelize');

const { models } = require('./../lib/sequelize');



//Al usar sequelize ya no es necesario el pool,
//Sequelize lo gestiona automaticamente
// const pool = require('./../lib/postgres.pool');


class ProductsService {

  constructor() {

    // this.generate();


    // this.pool = pool;
    // //escucho si se produce algun error en la conexion
    // this.pool.on(('error'), (err) => console.err(err));
  }

  // generate() {
  //   const limit = 100;
  //   for (let index = 0; index < limit; index++) {
  //     this.products.push({
  //       id: faker.datatype.uuid(),
  //       name: faker.commerce.productName(),
  //       price: parseInt(faker.commerce.price(), 10),
  //       image: faker.image.imageUrl(),
  //       isBlock: faker.datatype.boolean(),
  //     });
  //   }
  // }

  async create(body) {
    const newProduct = await models.Product.create(body);
    return newProduct;
    // const newProduct = {
    //   id: faker.datatype.uuid(),
    //   ...data
    // }
    // this.products.push(newProduct);
    // return newProduct;

  }

  async find(query) {
    const options = {
      include: ['category'],
    }
    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }
    //En resumen, los parámetros options se utilizan
    //para personalizar y configurar cómo se realiza
    //la consulta a la base de datos utilizando Sequelize,
    //incluyendo cómo se aplican las relaciones y cómo se maneja la paginación.
    const data = await models.Product.findAll(options);
    return data;

    //El uso de sequelize deja inoperable esto, ya que
    //usa pool de manera nativa.
    // const rta = await this.pool.query(query);
    // return rta.rows;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound("Product not found");
    } if (product.isBlock) {
      throw boom.conflict("Product is block");
    }
    return product;
  }

  // const product = this.products.find(item => item.id === id);
  // if (!product) {
  //   throw boom.notFound('product not found');
  // }
  // if (product.isBlock) {
  //   throw boom.conflict('product is block');
  // }
  // return product;
  // }

  async update(id, changes) {

    /**La función update() devuelve un array con dos elementos: [updatedCount, updatedProducts].
  updatedCount: Es el número de registros actualizados en la base de datos. En este caso, como estamos actualizando un solo producto por su id, updatedCount será 1 si se realizó la actualización correctamente y 0 si no se encontró un producto con el id proporcionado.
  updatedProducts: Es un array que contiene los registros actualizados. Dado que estamos utilizando returning: true, este array contendrá el producto actualizado.
  where: { id }: El parámetro where se utiliza para especificar las condiciones que deben cumplir los registros que se desean actualizar. En este caso, estás buscando los registros en la tabla "products" que tengan un valor de id igual al valor que se encuentra en la variable id. Esta cláusula where permite seleccionar los registros específicos que deseas actualizar. En otras palabras, solo se actualizarán los registros cuyo campo id coincida con el valor que esté almacenado en la variable id.

  returning: true: El parámetro returning se utiliza para especificar si deseas que la función update() devuelva los registros actualizados después de que se realice la actualización. Cuando estableces returning: true, la función update() devolverá dos valores: el número de registros actualizados (updatedCount) y una matriz que contiene los registros actualizados (updatedProducts) */
    const [updatedCount, updatedProducts] = await models.Product.update(changes, {
      where: { id },
      returning: true,
    });
    if (updatedCount === 0) {
      throw boom.notFound("Product not found")
    };
    return updatedProducts[0];
    // const index = this.products.findIndex(item => item.id === id);
    // if (index === -1) {
    //   throw boom.notFound('product not found');
    // }
    // const product = this.products[index];
    // this.products[index] = {
    //   ...product,
    //   ...changes
    // };
    // return this.products[index];
  }

  async delete(id) {
    const productDelete = await this.findOne(id);
    await productDelete.destroy();
    return id;
  };
  //   const index = this.products.findIndex(item => item.id === id);
  //   if (index === -1) {
  //     throw boom.notFound('product not found');
  //   }
  //   this.products.splice(index, 1);
  //   return { id };
  // }
}

module.exports = ProductsService;
