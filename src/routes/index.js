const fs = require("fs"); //se importa el módulos: fs
const epxress = require("express"); //se importan dos módulos:express
const router = epxress.Router(); //permite definir múltiples rutas y asociarles métodos HTTP,
// que manejarán las solicitudes de los clientes entrantes.


const PATH_ROUTES = __dirname; //constante donde se encuentra los puntos de documentos //y donde se encuentran las rutas.

//funcion auxiliar devuelve el nombre de archivo sin su extensión.
const removeExtension = (fileName) => {
  return fileName.split(".").shift(); //Este código toma una cadena fileNamey devuelve el nombre del archivo sin la extensión.
}; //llama primero al split()método en la file Name cadena, que divide la cadena en una matriz de subcadenas según un delimitador específico.

//lee los nombres de archivos en el directorio de rutas
fs.readdirSync(PATH_ROUTES).filter((file) => {
  // leer y filtrar los archivos de un directorio especificado
  const name = removeExtension(file); //remover extencion
  if (name !== "index") {
    //omitir archivos index
    console.log(`Cargando ruta ${name}`);
    router.use(`/${name}`, require(`./${file}`)); //carga dinamica de la ruta
  }
});


module.exports = router; //exporta el objeto Router
