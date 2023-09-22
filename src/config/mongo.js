
const mongoose = require("mongoose");//importa el paquete Mongoose
mongoose.set('strictQuery', false);//desactiva el modo estricto de Mongoose para permitir consultas
// con campos no definidos en el esquema.


const dbConnect = () => {//establece la conexión con la base de datos MongoDB.
const DB_URI = process.env.DB_URI; //recupera la cadena de conexión a la base de datos MongoDB 
   //desde la variable de entorno DB_URI.

  mongoose.connect(
   DB_URI,
  {
      useNewUrlParser: true,//son opciones para configurar la conexión de Mongoose con la base de datos MongoDB.
      useUnifiedTopology: true,
  },
     (err, res) => {
        if(!err){
            console.log('**** CONEXION CORRECTA *****')
         }else{
            console.log('**** ERROR DE CONEXION *****')
         }
        }
        );
    };
            

module.exports =dbConnect;//exporta la funcion dbconnect