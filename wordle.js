// Archivo principal
const { menu } = require("./src/input.js");
const { juego } = require("./src/juego.js");
const { menuJuego } = require("./src/menuJuego");
const { iniciarSesion, crearCuenta } = require("./src/cuentas.js");

async function main() {
  console.clear();
  let seguir = true;
  // while para imprimir el menu y comenzar la jugabilidad
  while (seguir) {
    let opcion = await menu();
    // tres opciones por medio de un switch
    switch (opcion.numero) {
      case 1:
        while (true) {
          // corresponde al inicio de sesión del juego
          let verificar = await iniciarSesion(); // retorna el usuario si existe y un booleano con TRUE
          if (verificar[0]) {
            console.clear();
            await menuJuego(verificar[1]);// Se envía por parámetro el nombre de usuario
            break;
            false;
          } else {
            console.log("El usuario y contraseña no son correctos.");
          }
        }
        break;

      case 2:
        console.clear();
        await crearCuenta(); // Se llama a la función de crear cuenta
        break;

      case 3:
        seguir = false;// Se termina el ciclo
        console.log("Adios!");
        break;
    }
  }
}

main();
