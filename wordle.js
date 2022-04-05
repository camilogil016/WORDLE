// Archivo principal
const { menu } = require("./src/input.js");
const { juego } = require("./src/juego.js");
const { menuJuego } = require("./src/menuJuego");
const { iniciarSesion, crearCuenta } = require("./src/cuentas.js");

//Funcion principal del juego que se encarga de tener el menu para crear cuenta, iniciar sesion o salirse del juego.
async function main() {
  console.clear();
<<<<<<< HEAD
  let seguir = true;
  // while para imprimir el menu y comenzar la jugabilidad
=======
  let seguir = true;  //Bolean para saber si el usuario desea salirse
>>>>>>> 29a366cdb2260df60f1611a85bab519277bb3e04
  while (seguir) {
    let opcion = await menu();
    // tres opciones por medio de un switch
    switch (opcion.numero) {
      case 1:
        while (true) {
<<<<<<< HEAD
          // corresponde al inicio de sesión del juego
          let verificar = await iniciarSesion(); // retorna el usuario si existe y un booleano con TRUE
          if (verificar[0]) {
=======
          let verificar = await iniciarSesion();
          if (verificar[0]) { //En caso de que el usuario y contraseña sean correctos.
>>>>>>> 29a366cdb2260df60f1611a85bab519277bb3e04
            console.clear();
            await menuJuego(verificar[1]);// Se envía por parámetro el nombre de usuario
            break;
            false;
          } else {    //En caso de que el usuario y contraseña sean incorrectos
            console.log("El usuario y contraseña no son correctos.");
          }
        }
        break;

      case 2:
<<<<<<< HEAD
        console.clear();
        await crearCuenta(); // Se llama a la función de crear cuenta
=======
        console.clear();  //Se encarga de clear la cuenta.
        await crearCuenta();
        await main();
>>>>>>> 29a366cdb2260df60f1611a85bab519277bb3e04
        break;

      case 3:
        seguir = false;// Se termina el ciclo
        console.log("Adios!");
        break;
    }
  }
}

main();
