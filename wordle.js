const { menu } = require("./src/input.js");
const { juego } = require("./src/juego.js");
const { menuJuego } = require("./src/menuJuego");
const { iniciarSesion, crearCuenta } = require("./src/cuentas.js");

//Funcion principal del juego que se encarga de tener el menu para crear cuenta, iniciar sesion o salirse del juego.
async function main() {
  console.clear();
  let seguir = true;  //Bolean para saber si el usuario desea salirse
  while (seguir) {
    let opcion = await menu();
    switch (opcion.numero) {
      case 1:
        while (true) {
          let verificar = await iniciarSesion();
          if (verificar[0]) { //En caso de que el usuario y contraseña sean correctos.
            console.clear();
            await menuJuego(verificar[1]);
            break;
            false;
          } else {    //En caso de que el usuario y contraseña sean incorrectos
            console.log("El usuario y contraseña no son correctos.");
          }
        }
        break;

      case 2:
        console.clear();  //Se encarga de clear la cuenta.
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
