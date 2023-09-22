const { matchedData } = require("express-validator"); // importa la función matchedData del paquete express-validator.
const { tracksModel } = require("../models"); //importa el modelo tracksModel del archivo models.js ubicado en la carpeta ../models.


/**
 *
 * @param {*} req
 * @param {*} res
 */

//Obtiene una lista de todos los elementos de la base de datos y los devuelve como una respuesta JSON.
const getItems = async (req, res) => {
  
    try { //Abre un bloque try-catch para capturar cualquier excepción que pueda ocurrir durante la ejecución del middleware.
      const user = req.user;
 
    const data = await tracksModel.find({});// utiliza el modelo tracksModel para buscar todos los documentos
    // en la colección tracks de la base de datos.

    res.send({ data, user });//envía una respuesta HTTP con el objeto data
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS"); //Si se detecta algún error de validación,este manejar el error y devolver una respuesta de error JSON.
  }
};


//Obtiene un elemento específico de la base de datos utilizando el ID
//proporcionado en la solicitud, y lo devuelve como una respuesta JSON.
/**
 * obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    req = matchedData(req); // obtiene los datos de la solicitud
    const { id } = req;
    const data = await tracksModel.findById(id); //busca el elemento con el ID especificado en la base de datos MongoDB.
    res.send({ data });//envía una respuesta HTTP con el objeto data
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM"); //maneja el error y devuelve una respuesta HTTP de error
    // con un mensaje de error específico en el cuerpo de la respuesta.
  }
};


//Crea un nuevo elemento en la base de datos utilizando los datos proporcionados en la solicitud
// y los devuelve como una respuesta JSON.
/**
 * insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req); // obtiene los datos de la solicitud
    const data = await tracksModel.create(body); //obtener los datos coincidentes de la solicitud
    res.send({ data });//envía una respuesta HTTP con el objeto data
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");//maneja el error y devuelve una respuesta HTTP de error
    // con un mensaje de error específico en el cuerpo de la respuesta.
  }
};


// Actualiza un elemento existente en la base de datos utilizando el ID proporcionado en la solicitud y los nuevos datos proporcionados,
// y devuelve el elemento actualizado como una respuesta JSON.
/**
 * actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req); // obtiene los datos de la solicitud
    const data = await tracksModel.findOneAndUpdate(id, body);//actualiza los campos correspondientes
    res.send({ data });//envía una respuesta HTTP con el objeto data
  } catch (e) {
    handleHttpError(res, "ERROR_UPDATE_ITEMS");//maneja el error y devuelve una respuesta HTTP de error
    // con un mensaje de error específico en el cuerpo de la respuesta.
  }
};



//Elimina un elemento existente en la base de datos utilizando el ID proporcionado en la solicitud y devuelve una respuesta JSON
//que indica si la eliminación fue exitosa o no.
/**
 * eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.delete({ _id: id });//elimina el documento de la colección tracks que tiene el _id
    res.send({ data });//envía una respuesta HTTP con el objeto data
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_ITEM");//maneja el error y devuelve una respuesta HTTP de error
    // con un mensaje de error específico en el cuerpo de la respuesta.
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }; //exporta un objeto que contiene todas las funciones definidas en este archivo
