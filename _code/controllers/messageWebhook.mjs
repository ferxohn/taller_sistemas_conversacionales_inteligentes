/* Archivo para obtener el evento del Webhook, o sea, el mensaje enviado por el usuario al chatbot. */

// Escrito bajo el estandar ECMAScript 2015 o ES6.

/* Este archivo permite obtener el JSON obtenido del evento del Webhook, que en este caso contiene
el mensaje enviado por el usuario al chatbot. */

// Se importa el modulo de respuesta.
import { default as processMessage } from "../helpers/processMessage.mjs";

/* Gracias a "export default" (Estandar ECMAScript 2015 o ES6), es posible exportar
las funciones que declaremos dentro de las llaves, encapsulandolas para ser usadas en otros archivo. 
En este caso, solamente se encapsula una funcion (default, por estandar) que recibe como parametros
request y response.*/
export default (request, response) => {
    /* Se verifica que el evento del webhook provenga de una subscripcion
    de una pagina (valor "Page") */
    if (request.body.object === "page") {
        /* Itera sobre cada entrada recibida (Pueden ser varias en caso de que existan
        entradas en espera) */
        request.body.entry.forEach(entry => {
            /* Se obtiene el evento del Webhook. entry.messaging es un array con un solo
            elemento, por lo que solamente se obtiene ese elemento (con indice 0) */
            let webhook_event = entry.messaging[0];
            // Se procesa el mensaje para obtener una respuesta.
            processMessage(webhook_event);
        });
        /* "response" almacena el status 200 (codigo HTTP: OK), junto con un mensaje de confirmacion
        de evento recibido. */
        response.status(200).end("EVENTO_RECIBIDO");
    } else {
        // Sino, "response" almacena el status 404 (codigo HTTP: Not Found)
        response.sendStatus(404);
    }
};