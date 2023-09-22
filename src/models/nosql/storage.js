const mongoose = require("mongoose");//incorpora mongoose

const StorageScheme = new mongoose.Schema( //esquema o estructura
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    versionKey: false, //registra la fecha de creacion y actualizacion
    timestamps: true,
  }
);

module.exports = mongoose.model("storage", StorageScheme);//Exporta el modelo de datos 
