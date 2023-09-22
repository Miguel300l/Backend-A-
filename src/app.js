require("dotenv").config(); //usa las variables de entorno

const express = require("express"); //importa la libreria express

const cors = require("cors"); //importa la libreria cors

const app = express(); //crea una instancia de la aplicación Express.

const dbConnect = require("./src/config/mongo"); //establece la conexión con la base de datos MongoDB.
app.use(cors()); //habilita el intercambio de recursos de origen cruzado (CORS)

app.use(express.json());
//habilita el análisis de los datos JSON entrantes en el cuerpo de la solicitud.

app.use(express.static("storage")); //agrega middleware que sirve archivos estáticos desde el directorio storage.

const port = process.env.PORT || 3000; //establece el puerto en el que se ejecutará el servidor.

/*aqui invocamos las rutas*/
/*Todo localhost/api/*/
app.use("/api", require("./src/routes")); //agrega middleware que enruta todas las solicitudes que comienzan con
///api a los controladores definidos en el archivo routes.js.

app.listen(port, () => {
    //inicia el servidor y comienza a escuchar en el puerto especificado.
    console.log(`http://localhost:${port}`);
});
dbConnect();