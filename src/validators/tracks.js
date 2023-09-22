const { check } = require("express-validator");//importa la función check del paquete express-validator
const validateResult = require("../utils/handleValidator")//importa la funcion validateResult del módulo handleValidator


//es un conjunto de validadores para la creación de un elemento en la base de datos.
const validatorCreateItem = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),

  (req, res, next) => {
    return validateResult(req, res, next);//para comprobar si hay errores de validación.
  },
];

const validatorGetItem = [
  check("id")//El método check se utiliza para comprobar que las propiedades de la solicitud están presentes y no están vacías.
  
  .exists()//se utiliza para comprobar si una propiedad está presente en el objeto de la solicitud. Si la propiedad no está presente,
  // se considera un error de validación.


  .notEmpty()//se utiliza para comprobar si una propiedad no está vacía. Si la propiedad está vacía,
  // se considera un error de validación.

  .isMongoId(),//El método isMongoId se utiliza para comprobar que la propiedad mediaId es un ID válido de MongoDB.
  
  (req, res, next) => {
    return validateResult(req, res, next);//para comprobar si hay errores de validación.
  },
];
module.exports = { validatorCreateItem, validatorGetItem };//exporta los dos arrays de validadores
