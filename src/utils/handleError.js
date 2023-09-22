const handleHttpError = (res, message = "Algo sucedio", code = 403) => {
  //tres parametros,
  //res: representa el objeto de respuesta HTTP enviado por el servidor.

  //message: es un mensaje de error opcional que se enviará en la respuesta. El valor por defecto es
  // "Algo sucedió".

  //code: es el código de estado HTTP que se enviará en la respuesta. El valor por defecto es 403.

  res.status(code); //establece el código de estado HTTP en la respuesta res según el valor de code.

  res.send({ error: message }); //envía un objeto JSON en la respuesta res que contiene una propiedad error con el valor de message.
};

module.exports = { handleHttpError }; //exporta handleHttpError
