const {menuJugador} = require("./input.js")
const {imprimirEstadisticas} = require("./estadisticas.js")
const {juego} = require("./juego.js")

async function menuJuego(username) {
    seguir = true;
    while(seguir) {
        //console.clear();
        let opcion = await menuJugador();
        switch(opcion.numero) {
            case 1:
                await juego(username);
                break;

            case 2:
                imprimirEstadisticas(username);
                break;
            
            case 3:
                seguir = false;
                break;
            default:
                break;
        }
    }
}

module.exports = {
    menuJuego
}