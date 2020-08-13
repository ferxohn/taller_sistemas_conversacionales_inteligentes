/* Este archivo permite probar la conexion a nuestra app de Wit.ai */
import fetch from "isomorphic-fetch";

// Token unico de la app en Wit.ai.
const MY_WIT_TOKEN = "WITAI_ACCESS_TOKEN";

// String con la URL para realizar la peticion.
var url = "WITAI_APP_URL";

// Peticion usando el metodo GET.
fetch (
  url,
  {
    method: "GET",
    headers: { Authorization: `Bearer ${MY_WIT_TOKEN}` }
  }
)
/* Conversion de la peticion en un archivo JSON, y posterior impresion en consola.
   Hace uso de funciones flecha (son anonimas: que no tiene nombre), que no son mas
   que funciones que reciben y procesa los elementos del objeto desde donde se llaman. */
.then(response => response.json())
// Esta funcion recibe el objeto obtenido del primer "then".
.then(json => console.log(json));