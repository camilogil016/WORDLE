const inquirer = require("inquirer");

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
};

module.exports = {
    menu,
}