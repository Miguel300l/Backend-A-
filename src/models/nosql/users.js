const mongoose = require("mongoose");//incorpora mongoose
const mongooseDelete = require ("mongoose-delete")//eliminar

const UserScheme = new mongoose.Schema(//esquema o estructura 
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select:false
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,//registra la fecha de creacion y actualizacion
    versionKey: false,
  }
);

UserScheme.plugin(mongooseDelete, { overrideMethods: "all" });//agregar la funcionalidad de eliminación lógica a este esquema. 
module.exports = mongoose.model("users", UserScheme);//Exporta el modelo de datos 
//users nombre de la tabla o coleccion