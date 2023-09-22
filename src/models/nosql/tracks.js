const mongoose = require("mongoose");//importa la libreria de mongoose
const mongooseDelete = require("mongoose-delete")//  importa la librería mongoose-delete,eliminar

const TracksScheme = new mongoose.Schema( //esquema o estructura
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      //representar identificadores únicos de objetos de mongoose
      type: mongoose.Types.ObjectId,
    },
  },
  {
    versionKey: false, //registra la fecha de creacion y actualizacion
    timestamps: true,
  }
);

TracksScheme.plugin(mongooseDelete, { overrideMethods: "all" });//agrega la funcionalidad de eliminación lógica a este esquema. 
module.exports = mongoose.model("tracks", TracksScheme);//Exporta el modelo de datos
