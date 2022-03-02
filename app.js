const { menu } = require("./input");
const { iniciarSesion, crearCuenta } = require("./cuentas");

async function main() {
  console.clear();
  let opcion = { numero: 0 };
  // Ciclo principal de la aplicación
  while (opcion.numero != 3) {
    // Muestar el menu
    opcion = await menu();
    switch (opcion.numero) {
      case 1:
        console.log("1");
        await iniciarSesion();
        break;
      case 2:
        console.log("2");
        await crearCuenta();
        break;
      case 3:
        console.log("3");
        break;
    }
  }
}

main();
