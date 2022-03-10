const { menu } = require("./src/input.js");
const { juego } = require("./src/juego.js");
const { menuJuego } = require("./src/menuJuego");
const { iniciarSesion, crearCuenta } = require("./src/cuentas.js");

async function main() {
  console.clear();
  let seguir = true;
  while (seguir) {
    let opcion = await menu();
    switch (opcion.numero) {
      case 1:
        while (true) {
          let verificar = await iniciarSesion();
          if (verificar[0]) {
            console.clear();
            await menuJuego(verificar[1]);
            break;
            false;
          } else {
            console.log("El usuario y contraseña no son correctos.");
          }
        }
        break;

      case 2:
        console.clear();
        await crearCuenta();
        await main();
        break;

      case 3:
        seguir = false;
        console.log("Adios!");
        break;
    }
  }
}

main();
