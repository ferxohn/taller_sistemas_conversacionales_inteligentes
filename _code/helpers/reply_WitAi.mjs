/* Archivo de respuesta usando Wit.Ai */

// Escrito bajo el estandar ECMAScript 2015 o ES6.

/* Este archivo permite responder al usuario a partir de la entidad y valor obtenido de
Wit.Ai */

/* Gracias a "export default" (Estandar ECMAScript 2015 o ES6), es posible exportar
las funciones que declaremos dentro de las llaves, encapsulandolas para ser usadas en otros archivo. 
En este caso, solamente se encapsula una funcion (default, por estandar) que recibe como parametro
message. */
export default (message) => {
    // Del JSON recibido de Wit.ai, se extrae la entidad y el valor.
    let entity = Object.keys(message.nlp["entities"])[0];
    let value = message.nlp["entities"][entity][0]["value"];
    
    // Primero se identifica la entidad.
    switch (entity) {
        // Entidad "ser".
        case "ser":
            // Finalmente se identifica el valor.
            switch (value) {
                // Valor "zombies".
                case "zombies":
                    var reply = "https://es.wikipedia.org/wiki/Zombi";
                    break;
                // Valor "vampiros".
                case "vampiros":
                    var reply = "https://es.wikipedia.org/wiki/Vampiro";
                    break;
                // Valor "hombres lobo".
                case "hombres lobo":
                    var reply = "https://es.wikipedia.org/wiki/Hombre_lobo";
                    break;
                // Valor "fantasmas".
                case "fantasmas":
                    var reply = "https://es.wikipedia.org/wiki/Fantasma";
                    break;
                // Salida Default.
                default:
                    var reply = "Disculpa, no tengo respuesta a lo que me preguntaste :(";
                    break;
            }
            break;
        // Entidad "eliminar".
        case "eliminar":
            // Finalmente se detecta el valor.
            switch (value) {
                // Valor "zombies".
                case "zombies":
                    var reply = "https://elmicrowave.wordpress.com/2014/03/27/como-matar-un-zombi-diez-maneras-de-matar-a-un-zombi/";
                    break;
                // Valor "vampiros".
                case "vampiros":
                    var reply = "http://www.indicepr.com/noticias/2014/06/22/action/22656/5-maneras-de-matar-un-vampiro/";
                    break;
                // Valor "hombres lobo".
                case "hombres lobo":
                    var reply = "http://www.vampirosyhombreslobos.com/como-matar-a-un-hombrelobo/";
                    break;
                // Valor "fantasmas".
                case "fantasmas":
                    var reply = "https://es.wikihow.com/sacar-a-un-fantasma-de-tu-casa";
                    break;
                // Salida Default.
                default:
                    var reply = "Disculpa, no tengo respuesta a lo que me preguntaste :(";
                    break;
            }
            break;
        // Entidad "existir".
        case "existir":
            // Finalmente se detecta el valor.
            switch (value) {
                // Valor "zombies".
                case "zombies":
                    var reply = "http://www.rtve.es/noticias/20170203/existen-zombis-muertos-vivientes-bajo-luz-ciencia/1485219.shtml";
                    break;
                // Valor "vampiros".
                case "vampiros":
                    var reply = "https://okdiario.com/curiosidades/2016/10/19/vampiros-reales-463564";
                    break;
                // Valor "hombres lobo".
                case "hombres lobo":
                    var reply = "http://www.notodo.com/historia-de-los-hombres-lobo";
                    break;
                // Valor "fantasmas".
                case "fantasmas":
                    var reply = "http://www.eluniversal.com.mx/articulo/ciencia-y-salud/ciencia/2017/03/1/existen-los-fantasmas-la-fisica-te-contesta";
                    break;
                // Salida Default.
                default:
                    var reply = "Disculpa, no tengo respuesta a lo que me preguntaste :(";
                    break;
            }
            break;
        // Entidad "sobrevivir".
        case "sobrevivir":
            // Finalmente se detecta el valor.
            switch (value) {
                // Valor "zombies".
                case "zombies":
                    var reply = "https://conectica.com/2015/04/11/consejos-sobrevivir-apocalipsis-zombie/";
                    break;
                // Valor "vampiros".
                case "vampiros":
                    var reply = "https://www.elmundo.es/elmundo/2010/08/14/andalucia_malaga/1281780419.html";
                    break;
                // Valor "hombres lobo".
                case "hombres lobo":
                    var reply = "https://www.taringa.net/+ciencia_educacion/como-sobrevivir-a-hombres-lobo_i5s2r";
                    break;
                // Valor "fantasmas".
                case "fantasmas":
                    var reply = "https://www.revistavanityfair.es/cultura/entretenimiento/articulos/guia-de-instrucciones-para-vivir-en-una-casa-encantada/20915";
                    break;
                // Salida Default.
                default:
                    var reply = "Disculpa, no tengo respuesta a lo que me preguntaste :(";
                    break;
            }
            break;
        // Salida Default.
        default:
            var reply = "Disculpa, no tengo respuesta a lo que me preguntaste :(";
            break;
    }
    return reply;
}