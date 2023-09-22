const multer = require ("multer");//mporta la libreria de multer

const storage = multer.diskStorage({
    destination:function(req, file, cb){//Esta función especifica la ruta de destino para los archivos cargados.
const pathStorage =`${__dirname}/../storage`//es la ruta completa y absoluta donde los archivos cargados se almacenarán en el servidor.
cb(null,pathStorage)// indica que no ha ocurrido ningún error y que la ruta donde se almacenará el archivo cargado es pathStorage.
    },
    filename:function(req, file, cb){//Esta función define cómo se debe nombrar el archivo cargado.
//todo: mi-cv.pdf mi_foto.png mi-video.mp4
const ext = file.originalname.split(".").pop();//es una cadena que contiene la extensión del archivo que se está cargando.
const filename = `file-${Date.now()}.${ext}`;// es una cadena que contiene el nombre de archivo generado dinámicamente para el archivo cargado, 
cb(null, filename)//indicaque no a ocurrido ningun error
    },
});


const uploadMiddleware=multer({storage});//carga de archivos utilizando la función multer

module.exports =  uploadMiddleware;//se exporta uploadMiddleware