const inquirer = require("inquirer");

//Se preguntara al usuario un texto y devolvera el String.
async function ask(texto) {
    let x = await datos(texto);
    x = x.answer;
    return x;
}

//Se preguntara al usuario un texto y devolvera el String.
async function askPasswords(texto) {
  let x = await datosPasswords(texto);
  x = x.answer;
  return x;
}

//Funcion para preguntar a los usuarios una contraseña
const datosPasswords = async (texto) => {
  const opciones = [
    {
      name: "answer",
      type: "password",
      message: texto,
    }];
    return inquirer.prompt(opciones);
}

//Funcion que preguntara cualquier dato que se pueda ver.
const datos = async (texto) => {
    const opciones = [
      {
        name: "answer",
        type: "input",
        message: texto,
      }];
      return inquirer.prompt(opciones);
}

//Funcion para el menu principal
const menu = async () => {
  const opciones = [

    {
        name : 'numero',
        type: "list",
        message: "Seleccionar opcion",
        choices: [
            {value: 1, name: "Iniciar Sesion"},
            {value: 2, name: "Crear cuenta"},
            {value: 3, name: "Salir"},

        ],
    }
  ];

  return inquirer.prompt(opciones);
}

//Funcion para el menu del juego.
const menuJugador = async () => {
  const opciones = [

    {
        name : 'numero',
        type: "list",
        message: "Seleccionar opcion",
        choices: [
            {value: 1, name: "Crear un nuevo juego"},
            {value: 2, name: "Consultar estadísticas"},
            {value: 3, name: "Cerrar sesión"},

        ],
    }
  ];

  return inquirer.prompt(opciones);
}

module.exports = {
    menu, menuJugador, ask, askPasswords
}
