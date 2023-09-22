const { check } = require("express-validator");//importa la función check del paquete express-validator
const validateResult = require("../utils/handleValidator")//importa la funcion validateResult del módulo handleValidator


const validatorRegister= [
  check("name")//El método check se utiliza para comprobar que las propiedades de la solicitud están presentes y no están vacías.
  
  .exists()//se utiliza para comprobar si una propiedad está presente en el objeto de la solicitud. Si la propiedad no está presente,
  // se considera un error de validación.


  .notEmpty()//se utiliza para comprobar si una propiedad no está vacía. Si la propiedad está vacía,
  // se considera un error de validación.

  .isLength({min:3, max:99}),//El método isMongoId se utiliza para comprobar que la propiedad mediaId es un ID válido de MongoDB.
  

  check("age")//El método check se utiliza para comprobar que las propiedades de la solicitud están presentes y no están vacías.
  
  .exists()//se utiliza para comprobar si una propiedad está presente en el objeto de la solicitud. Si la propiedad no está presente,
  // se considera un error de validación.


  .notEmpty()//se utiliza para comprobar si una propiedad no está vacía. Si la propiedad está vacía,
  // se considera un error de validación.

  .isNumeric(),//El método isMongoId se utiliza para comprobar que la propiedad mediaId es un ID válido de MongoDB.
  


  check("password")//El método check se utiliza para comprobar que las propiedades de la solicitud están presentes y no están vacías.
  
  .exists()//se utiliza para comprobar si una propiedad está presente en el objeto de la solicitud. Si la propiedad no está presente,
  // se considera un error de validación.


  .notEmpty()//se utiliza para comprobar si una propiedad no está vacía. Si la propiedad está vacía,
  // se considera un error de validación.

  .isLength({min:3, max:15}),//El método isMongoId se utiliza para comprobar que la propiedad mediaId es un ID válido de MongoDB.
  


  check("email")//El método check se utiliza para comprobar que las propiedades de la solicitud están presentes y no están vacías.
  
  .exists()//se utiliza para comprobar si una propiedad está presente en el objeto de la solicitud. Si la propiedad no está presente,
  // se considera un error de validación.


  .notEmpty()//se utiliza para comprobar si una propiedad no está vacía. Si la propiedad está vacía,
  // se considera un error de validación.

  .isEmail(),//El método isMongoId se utiliza para comprobar que la propiedad mediaId es un ID válido de MongoDB.
  
  (req, res, next) => {
    return validateResult(req, res, next);//para comprobar si hay errores de validación.
  },
];





const validatorLogin= [
  
  check("password")//El método check se utiliza para comprobar que las propiedades de la solicitud están presentes y no están vacías.
  
  .exists()//se utiliza para comprobar si una propiedad está presente en el objeto de la solicitud. Si la propiedad no está presente,
  // se considera un error de validación.


  .notEmpty()//se utiliza para comprobar si una propiedad no está vacía. Si la propiedad está vacía,
  // se considera un error de validación.

  .isLength({min:3, max:15}),//El método isMongoId se utiliza para comprobar que la propiedad mediaId es un ID válido de MongoDB.
  


  check("email")//El método check se utiliza para comprobar que las propiedades de la solicitud están presentes y no están vacías.
  
  .exists()//se utiliza para comprobar si una propiedad está presente en el objeto de la solicitud. Si la propiedad no está presente,
  // se considera un error de validación.


  .notEmpty()//se utiliza para comprobar si una propiedad no está vacía. Si la propiedad está vacía,
  // se considera un error de validación.

  .isEmail(),//El método isMongoId se utiliza para comprobar que la propiedad mediaId es un ID válido de MongoDB.
  
  (req, res, next) => {
    return validateResult(req, res, next);//para comprobar si hay errores de validación.
  },
];

module.exports = { validatorRegister, validatorLogin};//exporta validadores
