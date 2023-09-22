const customHeader = (req, res, next) => {//declara tres parámetros:
    // req (la solicitud entrante), 
    //res (la respuesta saliente) 
    // next (la función que permite pasar la solicitud al siguiente middleware o controlador de ruta).

   try{//Abre un bloque try-catch para capturar cualquier excepción que pueda ocurrir durante la ejecución del middleware.
    const apikey = req.headers.api_key;//Extrae el valor de la clave api_key del encabezado de la solicitud HTTP usando la propiedad headers
    // de la solicitud.
    if(apikey === "Miguel-01"){//Compara el valor de la clave api_key con "Miguel-01" para verificar si es correcta.
        next()
    }else{
        res.status(403)
        res.send({ error: "API_KEY_NO_ES_CORRECTA" })//Si la clave no es correcta, envía una respuesta JSON que indica que la clave no es correcta.
    }
    

   }catch(e){//envía una respuesta JSON que indica que algo salió mal en el middleware.
    res.status(403)
    res.send({error:"Algo_ocurrio_en_el_custom_header"})
   }
    
}

module.exports = customHeader//exporta customHeader


