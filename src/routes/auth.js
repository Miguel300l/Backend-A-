// todo http://localhost/tracks get, post delete, put.
const express = require("express"); //importa la libreria express.
const { loginCtrl, registerCtrl } = require("../controllers/auth");
const router = express.Router(); //crea un objeto "router" de Express, que nos permite definir las rutas
// para las peticiones HTTP.

const { validatorRegister, validatorLogin } = require("../validators/auth");

/**
 * crear un registro
 */
router.post("/register", validatorRegister, registerCtrl);
router.post("/login", validatorLogin, loginCtrl);

module.exports = router; // exporta el objeto "router"
