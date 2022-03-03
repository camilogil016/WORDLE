const {menuJugador} = require("./input.js")
const {juego} = require("./juego.js")

async function menuJuego() {
    console.clear();
    seguir = true;
    while(seguir) {
        let opcion = await menuJugador();
        switch(opcion.numero) {
            case 1:
                await juego();
                break;

            case 2:

                break;
            
            case 3:
                seguir = false;
                break;
        }
    }
}

module.exports = {
    menuJuego
}