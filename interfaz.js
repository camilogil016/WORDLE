const chalk = require("chalk");

function teclado() {
  let letras = "QWERTYUIOPASDFGHJKLÑ ZXCVBNM";
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

function pantalla() {
  let palabras = ["AUDIO", "     ", "     ", "     ", "     "];
  let palabra;
  let pared = chalk.cyan("|");
  for (let i = 0; i < palabras.length; i++) {
    palabra = palabras[i];
    console.log(chalk.cyan("\t---------------------"));
    console.log(
      `\t${pared} ${palabra[0]} ${pared} ${palabra[1]} ${pared} ${palabra[2]} ${pared} ${palabra[3]} ${pared} ${palabra[4]} ${pared}`
    );
  }
  console.log(chalk.cyan("\t---------------------"));
}
function main() {
  console.clear();  
  pantalla();
  teclado();
}
main();
