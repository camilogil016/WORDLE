const {menu} = require("./src/input.js")
const {juego} = require("./src/juego.js")
const {iniciarSesion, crearCuenta} = require("./src/cuentas.js")

async function main() {
    console.clear();
    let opcion = await menu();
    switch(opcion.numero) {
        case 1:
            if(await iniciarSesion()) {
                await juego();
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