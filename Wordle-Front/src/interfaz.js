chalk = require("chalk");

async function teclado(palabras) {
  // Se crea un arreglo con el orden de las letras en el teclado junto con su status
  // Para asi poder colocar el color dependiendo de la letra
  let letras = [
    ["Q", -1],
    ["W", -1],
    ["E", -1],
    ["R", -1],
    ["T", -1],
    ["Y", -1],
    ["U", -1],
    ["I", -1],
    ["O", -1],
    ["P", -1],
    ["A", -1],
    ["S", -1],
    ["D", -1],
    ["F", -1],
    ["G", -1],
    ["H", -1],
    ["J", -1],
    ["K", -1],
    ["L", -1],
    ["Ñ", -1],
    [" ", -1],
    ["Z", -1],
    ["X", -1],
    ["C", -1],
    ["V", -1],
    ["B", -1],
    ["N", -1],
    ["M", -1],
  ];
  // Se crea un ciclo para que recorra la matriz que almacena las palabras ingresadas y verifique el
  // estado de la letra, 0 no existe en la palabra, 1 existe pero no en esa posición
  // 2 existe y en la posición correcta
  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < palabras[i].length; j++) {
      // Se recorre el vector de las letras del teclado
      for (k in letras) {
        // verifica la letra en el tecaldo y despues su estado y lo agrega
        if (palabras[i][j][0] == letras[k][0]) {
          if (palabras[i][j][1] == 0 && letras[k][1] == -1) {
            letras[k][1] = 0;
          } else if (palabras[i][j][1] == 1 && letras[k][1] == -1) {
            letras[k][1] = 1;
          } else if (palabras[i][j][1] == 2 && (letras[k][1] == -1|| letras[k][1] ==1)) {
            letras[k][1] = 2;
          }
        }
      }
    }
  }

  let parte = "";
  for (i in letras) {
    if (letras[i][0] != " ") {
      // Si la letra es estado 0 se pinta roja
      if (letras[i][1] == 0) {
        parte += chalk.bgRed(` ${letras[i][0]} `) + " ";
      } else if (letras[i][1] == 1) {
        //Si es estado 1 se pinta amarillo
        parte += chalk.bgYellow(` ${letras[i][0]} `) + " ";
      } else if (letras[i][1] == 2) {
        //Si es estado 2 se pinta de verde
        parte += chalk.bgGreen(` ${letras[i][0]} `) + " ";
      } else if (letras[i][1] == -1) {
        // Si no, entonces gris
        parte += chalk.bgGray(` ${letras[i][0]} `) + " ";
      }
      // Si llega a la parte de separar por linea el teclado se imprime y se reinica la variable parte
      if (
        letras[i][0] === "P" ||
        letras[i][0] === "Ñ" ||
        letras[i][0] === "M"
      ) {
        // Se imprime la parte del teclado
        console.log(parte);
        parte = "";
      }
    } else {
      parte += ` ${letras[i][0]} ` + " ";
    }
  }
}

async function pantalla(palabras) {
  // se hace un for para recorrer la matriz de palabras y crear a interfaz
  for (let i = 0; i < palabras.length; i++) {
    // Se crea los cajones donde estaran las letras
    console.log(chalk.cyan("\t-----------------------"));
    let pared = chalk.cyan(" | ");
    process.stdout.write("\t");
    // se recorre la matriz y se obtiene el estado para pintar la palabra
    for (let j = 0; j < palabras[i].length; j++) {
      process.stdout.write(pared);
      if (palabras[i][j][1] == -1) {
        process.stdout.write(chalk.white(`${palabras[i][j][0]}`));
      }
      if (palabras[i][j][1] == 0) {
        process.stdout.write(chalk.red(`${palabras[i][j][0]}`));
      } else if (palabras[i][j][1] == 1) {
        process.stdout.write(chalk.yellow(`${palabras[i][j][0]}`));
      } else if (palabras[i][j][1] == 2) {
        process.stdout.write(chalk.green(`${palabras[i][j][0]}`));
      }
    }
    process.stdout.write(pared);
    console.log("");
  }
  console.log(chalk.cyan("\t-----------------------"));
}

function imprimir(palabras) {
  console.clear();
  pantalla(palabras);
  console.log("");
  teclado(palabras);
  console.log("");
}

module.exports = {
  imprimir,
};
