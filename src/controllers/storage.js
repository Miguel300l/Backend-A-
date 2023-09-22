const fs = require("fs");
const { matchedData } = require("express-validator");
const { storageModel } = require("../models"); //se importa el modulo storageModel
const { handleHttpError } = require("../utils/handleError"); //se importa el modulo handleHttpError

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`; //se utiliza para construir la URL pública de acceso al archivo.

//Esta función se utiliza para obtener una lista de todos los registros de archivos almacenados
//en la base de datos y enviarla como respuesta HTTP al cliente.
//obtener lista de la base de datos!
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    //Abre un bloque try-catch para capturar cualquier excepción que pueda ocurrir durante la ejecución del middleware.
    const data = await storageModel.find({}); // utiliza el modelo storageModel para buscar todos los documentos
    // en la colección tracks de la base de datos.
    res.send({ data }); //envía una respuesta HTTP con el objeto data
  } catch (e) {
    handleHttpError(res, "ERROR_LIST_ITEMS"); //maneja el error y devuelve una respuesta HTTP de error
    // con un mensaje de error específico en el cuerpo de la respuesta.
  }
};

// se utiliza para obtener un registro específico de la base de datos.
// Esta función utiliza el modelo storageModel
/**
 * obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_DETAIL_ITEMS"); //maneja el error y devuelve una respuesta HTTP de error
    // con un mensaje de error específico en el cuerpo de la respuesta.
  }
};

//se utiliza para insertar un nuevo registro en la base de datos. Esta función utiliza la propiedad file
/**
 * insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => { // Esto declara una función asincrónica llamada createItem
  try {
    const { file } = req; //Esto utiliza la desestructuración para extraer la file propiedad del req objeto.
    const fileData = {
      //Esto crea un nuevo objeto llamado fileDataque contiene el nombre de archivo y la URL del archivo cargado.
      filename: file.filename, //
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = await storageModel.create(fileData); //Esto usa para storageModel crear un nuevo elemento en el almacenamiento.
    res.send({ data, message: "Imagen subida exitosamente." }); //envía una respuesta HTTP con el objeto data
  } catch (e) {
    handleHttpError(res, "ERROR AL SUBIR IMAGEN"); //maneja el error y devuelve una respuesta HTTP de error
    // con un mensaje de error específico en el cuerpo de la respuesta.
  }
};

//se utiliza para eliminar un registro existente en la base de datos.
/**
 * eliminar un registro
 * @param {*} req
 * @param {*} res
 */

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);

    // Busca el elemento en la base de datos
    const dataFile = await storageModel.findById(id);

    if (!dataFile) {
      return res.status(404).send({ error: 'Element not found' });
    }

    const { filename } = dataFile;

    // Elimina el elemento de la base de datos
    await storageModel.findByIdAndDelete(id);

    // Elimina el archivo asociado en el sistema de archivos local
    const filePath = `${MEDIA_PATH}/${filename}`;
    fs.unlinkSync(filePath);

    const data = {
      filePath,
      message: 'Eliminado correctamente',
    };

    // Envía una respuesta HTTP con éxito (código 200) y los datos
    res.status(200).send({ data });
  } catch (e) {
    console.error(e);
    // Maneja cualquier error inesperado y devuelve una respuesta HTTP de error genérica
    res.status(500).send({ error: 'No se pudo eliminar' });
  }
};


module.exports = { getItems, getItem, createItem, deleteItem }; //se exporta
