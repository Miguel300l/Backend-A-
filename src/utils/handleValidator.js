const {validationResult} = require("express-validator");//comprueba los resultados de la validación y devuelve una instancia de ValidationResult,
// que se utiliza para comprobar si hay errores de validación en la solicitud.

const validateResult = (req, res, next) =>{//La función acepta tres parámetros:
    //req: representa el objeto de solicitud HTTP enviado por el cliente.
    //res: representa el objeto de respuesta HTTP que se enviará al cliente.
    //next: es una función de devolución de llamada que se invoca para pasar el control a la siguiente función 
    //en la cadena de middleware.

    try{
        validationResult(req).throw();//comprueba si hay un error
        return next(); 
        }catch(err){
            res.status(403);
            res.send({errors: err.array() });
        }
    };

    module.exports = validateResult//exporta validateResult



