const {menu} = require("./src/input.js")
const {juego} = require("./src/juego.js")
const {menuJuego} = require("./src/menuJuego")
const {iniciarSesion, crearCuenta} = require("./src/cuentas.js")

async function main() {
    console.clear();
    let opcion = await menu();
    switch(opcion.numero) {
        case 1:
            let verificar = await iniciarSesion();
            if(verificar[0]) {
                await menuJuego(verificar[1]);
            } else {
                console.log("El usuario y contraseña no son correctos.");
            }
            break;

        case 2:
            console.clear();
            await crearCuenta();
            await main();
            break;
        
        case 3:
            console.log("Adios!");
            break;
    }
}

main();