/* Archivo de procesado del mensaje y respuesta automatizada a la conversacion. */

// Escrito bajo el estandar ECMAScript 2015 o ES6.

/* Este archivo permite procesar el mensaje recibido, y regresar una respuesta automatizada a partir de la plataforma Wit.ai. */

/* Se importa el modulo request, con el que podremos realizar una peticion POST a la conversacion en Messenger,
y asi poder regresar una respuesta automatizada. */
import request from "request";
// Se importa el modulo de respuesta con Wit.ai.
import { default as WitAi } from "./reply_WitAi.mjs";

/* Gracias a "export default" (Estandar ECMAScript 2015 o ES6), es posible exportar
las funciones que declaremos dentro de las llaves, encapsulandolas para ser usadas en otros archivo. 
En este caso, solamente se encapsula una funcion (default, por estandar) que recibe como parametro
webhook_event. */
export default (webhook_event) => {
    // Se imprime el contenido del JSON de entrada.
    console.log(webhook_event);
    // Se guarda en una constante el token de la pagina de Facebook que hace uso de nuestro chatbot.
    const FACEBOOK_ACCESS_TOKEN = "FACEBOOK_ACCES_TOKEN";

    // Finalmente se hace la peticion POST a la conversacion de Messenger para regresar la respuesta automatizada.
    request (
        {
            url: "https://graph.facebook.com/v3.2/me/messages",
            qs: { access_token: FACEBOOK_ACCESS_TOKEN },
            method: "POST",
            json: {
                messaging_type: "RESPONSE",
                recipient: { id: webhook_event.sender.id },
                message: { text: WitAi(webhook_event.message) },
            }
        }    
    );
}