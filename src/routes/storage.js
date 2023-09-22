const express = require("express");// se importa el módulo express

const router = express.Router();//crea un objeto de enrutador de Express.

const uploadMiddleware = require("../utils/handleStorage");//se utilizan para agregar funcionalidad adicional a la aplicación,
// como el manejo de archivos.

const { getItems, getItem, updateItem, deleteItem, createItem } = require("../controllers/storage");//se importan los controladores
const { validatorGetItem } = require("../validators/storage.js")//se importa un archivo de validación



/**
 * Lista de items
 */
router.get("/", getItems);//se define una ruta de tipo GET

/**
 * Detalle de item
 */
router.get("/:id", validatorGetItem, getItem);//se define una ruta de tipo GET

/**
 * Eliminar item
 */
router.delete("/:id", validatorGetItem, deleteItem);//se define una ruta de tipo DELETE
// la id se utiliza para identificar un elemento específico en la aplicación.

/**
 * Crear item
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);//se define una ruta de tipo POST
//maneja la carga de archivos uploadMiddleware.single("myfile")

//este es .

module.exports = router;//exporta el enrutador