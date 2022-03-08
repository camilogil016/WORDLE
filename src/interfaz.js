chalk = require("chalk");

function teclado(palabras) {
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
  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < palabras[i].length; j++) {
      for (k in letras) {
        if (palabras[i][j][0] == letras[k][0]) {
          if (palabras[i][j][1] == 0 && letras[k][1] == -1) {
            letras[k][1] = 0;
          } else if (palabras[i][j][1] == 1 && letras[k][1] == -1) {
            letras[k][1] = 1;
          } else if (palabras[i][j][1] == 2 && letras[k][1] == -1) {
            letras[k][1] = 2;
          }
        }
      }
    }
  }

  let parte = "";

  for (i in letras) {
    if (letras[i][0] != " ") {
      if (letras[i][1] == 0) {
        parte += chalk.bgRed(` ${letras[i][0]} `) + " ";
      } else if (letras[i][1] == 1) {
        parte += chalk.bgYellow(` ${letras[i][0]} `) + " ";
      }
      if (letras[i][1] == 2) {
        parte += chalk.bgGreen(` ${letras[i][0]} `) + " ";
      } else if (letras[i][1] == -1) {
        parte += chalk.bgGray(` ${letras[i][0]} `) + " ";
      }
      if (
        letras[i][0] === "P" ||
        letras[i][0] === "Ñ" ||
        letras[i][0] === "M"
      ) {
        console.log(parte);
        parte = "";
      }
    } else {
      parte += ` ${letras[i][0]} ` + " ";
    }
  }
}

async function pantalla(palabras) {
  for (let i = 0; i < palabras.length; i++) {
    console.log(chalk.cyan("\t-----------------------"));
    let pared = chalk.cyan(" | ");
    process.stdout.write("\t");
    for (let j = 0; j < palabras[i].length; j++) {
      process.stdout.write(pared);
      if (palabras[i][j][1] == -1) {
        process.stdout.write(chalk.white(`${palabras[i][j][0]}`));
      }
      if (palabras[i][j][1] == 0) {
        process.stdout.write(chalk.gray(`${palabras[i][j][0]}`));
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
