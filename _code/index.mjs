/* Archivo principal de la app. */

// Escrito bajo el estandar ECMAScript 2015 o ES6.

/* Nuestra app servira como servidor Webhook del chatbot de Messenger,
usando el framework Express (que actuara como el servidor), y la libreria
body-parser (que actuara como middleware, para que Express pueda manejar
el cuerpo (body) de las peticiones). */
import express from "express";
import bodyParser from "body-parser";
// Se importa el modulo de verificacion de conexion a la app de Facebook.
import { default as verification } from "./controllers/verification.mjs";
// Se importa el modulo de
import { default as messageWebhook } from "./controllers/messageWebhook.mjs";

// Se crea una instancia de Express. Se almacena como constante.
const app = express();

// Se usa body-parser para procesar el cuerpo de las peticiones.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Las peticiones GET se procesan con verification.
app.get("/", verification);
// Las peticiones POST se procesan con messageWebhook.
app.post("/", messageWebhook)

// Finalmente se pone a funcionar el servidor, manteniendolo escuchando por el puerto 3000.
app.listen(3000, () => console.log("El servidor Webhook se encuentra escuchando por el puerto 3000"));