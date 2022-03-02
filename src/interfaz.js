const chalk = require("chalk");

function teclado() {
  let letras = "QWERTYUIOPASDFGHJKLÑ >ZXCVBNM";
  let parte = "";
  for (i in letras) {
    if (letras[i] != " ") {
      if (letras[i] == "E") {
        parte += chalk.red(` ${letras[i]} `) + " ";
      } else {
        parte += chalk.bgBlue(` ${letras[i]} `) + " ";
      }
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
  for(let i=0; i<palabras.length ;i++) {
    console.log(chalk.cyan("\t-----------------------"));
    let pared = chalk.cyan(" | ");
    process.stdout.write("\t");
    for(let j=0; j<palabras[i].length;j++) {
      process.stdout.write(pared);
      if(palabras[i][j][1] == 0) {
        process.stdout.write(chalk.white(`${palabras[i][j][0]}`));
      } else if(palabras[i][j][1] == 1) {
        process.stdout.write(chalk.yellow(`${palabras[i][j][0]}`));
      } else if(palabras[i][j][1] == 2) {
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
  teclado();
  console.log("");
}

module.exports = {
  imprimir
}
