/* Archivo de verificacion de conexion a la app de Facebook */

// Escrito bajo el estandar ECMAScript 2015 o ES6.

/* Este archivo permite conectar nuestro servidor Webhook a la app de
Facebook (en este ejemplo: app de Messenger). */

/* Gracias a "export default" (Estandar ECMAScript 2015 o ES6), es posible exportar
las funciones que declaremos dentro de las llaves, encapsulandolas para ser usadas en otros archivo. 
En este caso, solamente se encapsula una funcion (default, por estandar) que recibe como parametros
request y response.*/
export default (request, response) => {
    
    // Variable con el token definido en la configuracion de la app de Facebook.
    let token = "FACEBOOK_CONFIG_TOKEN"

    // Variable que contiene un parametro de la peticion con un entero generado por Facebook.
    let hubChallenge = request.query["hub.challenge"];
    
    // variable. Este parametro siempre esta establecido en "subscribe" por Facebook.
    let hubMode = request.query["hub.mode"];
    
    /* Variable. Contiene el resultado booleano de la verificacion del token recibido de la peticion 
    a Facebook con el token que establecimos en la constante "token". */
    let verifyTokenMatches = (request.query["hub.verify_token"] === token);
   
    /* Si hubMode no esta vacio, y la verificacion del token es true, entonces "response" contiene el entero almacenado
    en hubChallenge (establecido por Facebook) y el status 200 (codigo HTTP: OK). Se concreta la conexion. */
    if (hubMode && verifyTokenMatches) {
        console.log("WEBHOOK_VERIFICADO");
        response.status(200).send(hubChallenge);
    } else {
        // Sino, "response" contiene el status 403 (codigo HTTP: Forbidden), y no se concreta la conexion.
        response.status(403).end();
    }
};