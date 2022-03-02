const inquirer = require("inquirer");


/*async function  menu() {
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
      return inquirer.prompt(1);
}*/

async function ask(texto) {
    let x = await datos(texto);
    x = x.answer;
    return x;
}

const datos = async (texto) => {
    const opciones = [
      {
        name: "answer",
        type: "input",
        message: texto,
      }];
      return inquirer.prompt(opciones);
}

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

module.exports = {
    menu, ask
}
