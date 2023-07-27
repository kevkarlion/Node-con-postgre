const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    /**, schema.validate es un método proporcionado por la biblioteca Joi, que es una herramienta muy popular utilizada para validar y estructurar datos en JavaScript.
     * Lo que valida es "data" contra el "schema" y si encuentra que no es validado, retorna un { error }
     */
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;

/**
 * Explicacion de schema.validate
 *
 * data: Es el objeto de datos que se quiere validar contra el esquema. En este caso, el objeto de datos es data.

  options: Es un objeto opcional que permite configurar el comportamiento de la validación. En este caso, se pasa el objeto { abortEarly: false }. La opción abortEarly se utiliza para especificar si la validación debe detenerse después de encontrar el primer error o continuar y recopilar todos los errores encontrados. En este caso, al establecer abortEarly como false, la validación continuará y recopilará todos los errores encontrados.
 */
