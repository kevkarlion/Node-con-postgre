const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(25);
const price = Joi.number().integer().min(10);
const image = Joi.string();
const description = Joi.string().min(3).max(25);
const categoryId = Joi.number().integer();


//POST
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  categoryId: categoryId.required(),
});


//PATCH
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId: categoryId
});


//GET
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
