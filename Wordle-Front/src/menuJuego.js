const {menuJugador} = require("./input.js")
const {imprimirEstadisticas} = require("./estadisticas.js")
const {juego} = require("./juego.js")

//Funcion del menu, con entrada del username para luego guardar e imprimir sus estadisticas
async function menuJuego(username) {
    seguir = true; //boolean que sirve para preguntar si el usuario quiere seguir jugando o no.
    while(seguir) {
        //console.clear();
        let opcion = await menuJugador();
        switch(opcion.numero) {
            case 1:
                await juego(username);  //Lleva la opcion al juego de Wordle
                break;

            case 2:
                imprimirEstadisticas(username); //Leva a la funcion de imprimir las estadisticas del usuario
                break;
            
            case 3:
                seguir = false; //Por si el usuario quiere salirse del juego
                break;
            default:
                break;
        }
    }
}

module.exports = {
    menuJuego
}