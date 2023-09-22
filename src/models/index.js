const models = {
    usersModel: require("./nosql/users"),// asigna el modelo usersModel al resultado de requerir el archivo ./nosql/users.
    tracksModel: require("./nosql/tracks"),//signa el modelo tracksModel al resultado de requerir el archivo ./nosql/tracks.
    storageModel: require("./nosql/storage")//asigna el modelo storageModel al resultado de requerir el archivo ./nosql/storage.
}

module.exports = models//exporta el objeto models para que pueda ser utilizado por otros archivos en la aplicación.