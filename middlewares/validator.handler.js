const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    /**, schema.validate es un método proporcionado por la biblioteca Joi, que es una herramienta muy popular utilizada para validar y estructurar datos en JavaScript. */
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
