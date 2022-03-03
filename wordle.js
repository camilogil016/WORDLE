const { menu } = require("./src/input.js");
const { juego } = require("./src/juego.js");
const { menuJuego } = require("./src/menuJuego");
const { iniciarSesion, crearCuenta } = require("./src/cuentas.js");

async function main() {
  console.clear();
  let opcion = await menu();
  switch (opcion.numero) {
    case 1:
      let c = "CAMILO";
      console.log(c[1]);
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

    case 2:
      false;
      console.clear();
      await crearCuenta();
      await main();
      break;

    case 3:
      false;
      console.log("Adios!");
      break;
  }
}

main();
