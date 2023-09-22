// todo http://localhost/tracks get, post delete, put.
const express = require("express"); //importa la libreria express.
const router = express.Router(); //crea un objeto "router" de Express, que nos permite definir las rutas
// para las peticiones HTTP.
const authMiddleware = require("../middleware/session"); 
const checkRol = require ("../middleware/rol")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks"); // importan los controladores personalizados para cada ruta HTTP.
const {  getItems, getItem,createItem,  updateItem,deleteItem,} = require("../controllers/tracks");
 

//se definen las rutas para cada operación HTTP.
/**
 * lista de los items
 */
router.get("/",authMiddleware, getItems);
/**
 * obtener detalle de item
 */
router.get("/:id",authMiddleware, validatorGetItem, getItem);
/**
 * crear un registro
 */
router.post("/",authMiddleware,checkRol(["admin"]), validatorCreateItem, createItem);
/**
 * actualizar un registro
 */
router.put("/:id",authMiddleware, validatorGetItem, validatorCreateItem, updateItem,);
/**
 * eliminar
 */
router.delete("/:id",authMiddleware, validatorGetItem, deleteItem);

//llaman a uno o varios de los controladores importados anteriormente,
// para realizar las operaciones necesarias en la base de datos.

module.exports = router;// exporta el objeto "router"
