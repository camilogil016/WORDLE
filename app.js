const { menu } = require("./input");
const { iniciarSesion } = require("./cuentas");

async function main() {
  let opcion = { numero: 0 };
  // Ciclo principal de la aplicación
  while (opcion.numero != 3) {
    // Muestar el menu
    opcion = await menu();
    console.log(opcion);

    switch (opcion) {
      case 1:
        console.log("1");
        await iniciarSesion();
        break;
      case 2:
        console.log("2");
        break;
      case 3:
        console.log("3");
        break;
      default:
        break;
    }
  }
}

main();
