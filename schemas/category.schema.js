const Joi = require('joi');

const id = Joi.number().integer();
const category = Joi.string().min(3).max(20);
const image = Joi.string();

const createCategorySchema = Joi.object({
  category: category.required(),
  image: image
});

const updateCategorySchema = Joi.object({
  category: category,
  image: image
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
