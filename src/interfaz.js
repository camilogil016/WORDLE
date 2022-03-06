chalk = require("chalk");

function teclado(palabras) {
  let letras = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Ñ",
    " ",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];
  let parte = "";
  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < palabras[i].length; j++) {
      if (letras.some((x) => x == palabras[i][j][0])) {
        let indice = letras.indexOf(palabras[i][j][1]);
        if (palabras[i][j][1] == 0) {
          letras[indice] = chalk.bgWhite(`${palabras[i][j][0]}`);
          console.log("No existe");
        } else if (palabras[i][j][1] == 1) {
          letras[indice] = chalk.bgYellow(`${palabras[i][j][0]}`);
          console.log("Esta mal");
        } else if (palabras[i][j][1] == 2) {
          letras[indice] = chalk.bgGreen(`${palabras[i][j][0]}`);
          console.log("Esta nice");
        }
      }
    }
  }

  for (i in letras) {
    if (letras[i] != " ") {
      parte += letras[i] + " ";
      if (letras[i] === "P" || letras[i] === "Ñ" || letras[i] === "M") {
        console.log(parte);
        parte = "";
      }
    } else {
      parte += ` ${letras[i]} ` + " ";
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
