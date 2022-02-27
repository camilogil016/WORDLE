const chalk = require('chalk');

function teclado () {
    let letras = "QWERTYUIOPASDFGHJKL ZXCVBNM";
    let parte = ""
    for (i in letras) {
        
        if(letras[i]== "E"){
            parte += chalk.red(` ${letras[i]} `)+" ";
        }else{
            parte += chalk.bgBlue(` ${letras[i]} `)+" ";
        }
        if(letras[i] === "P" || letras[i] === "L"|| letras[i] === "M"){
            console.log(parte);
            parte = ""
        }    
    }    
}

function pantalla(){
    let palabras = ["AUDIO","     ","     ","     ","     "];
    let palabra
    let pared = chalk.cyan("|");
    for (let i = 0; i < palabras.length; i++){
        palabra = palabras[i];
        console.log(chalk.cyan("\t---------------------"));
        console.log(`\t${pared} ${palabra[0]} ${pared} ${palabra[1]} ${pared} ${palabra[2]} ${pared} ${palabra[3]} ${pared} ${palabra[4]} ${pared}`);    
    }
    console.log(chalk.cyan("\t---------------------"));
    
}
function main() {
    pantalla();
    teclado();
}
main();