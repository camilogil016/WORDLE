"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint: true});
let palabraCorrecta = "AUDIO";

function pedirPalabra() {
    let palabra = prompt("Palabra: ");
    while(palabra.length != 5 || /[^a-z]/i.test(palabra)) {
        console.log("Escriba unicamente una palabra de 5 letras.")
        palabra = prompt("Palabra: ");
    }
    return palabra;
}

function verificarPalabra(palabra) {
    for(let i=0;i<palabra.length;i++) {
        for(let j=0;j<palabraCorrecta.length;j++) {
            if(palabra.charAt(i) == palabraCorrecta.charAt(j) && i!=j) {    // Si la letra esta en la zona equivocada
                process.stdout.write(`\x1b[33m`);j=6;   // Amarillo
            } else if(palabra.charAt(i) == palabraCorrecta.charAt(j) && i==j) { // Si la letra esta en el lugar correcto
                process.stdout.write(`\x1b[32m`);j=6;   // Verde
            } else {    // Si la letra no existe
                process.stdout.write(`\x1b[37m`);   // Gris
            }
        }
        process.stdout.write(`${palabra.charAt(i)}`);
    }   
    console.log("");
}

function imprimirTabla(tabla) {
    for(let i=0;i<6;i++) {
        verificarPalabra(tabla[i]);
    }
}

async function main() {
    console.clear();
    let tabla = [
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
    ]
    //let palabra = pedirPalabra();
    //palabra = palabra.toUpperCase();
    //verificarPalabra("TONTE");
    for(let i=0;i<6;i++) {
        imprimirTabla(tabla);
        let palabra = pedirPalabra();
        palabra = palabra.toUpperCase();
        tabla[i] = palabra;
        console.clear();
    }
    imprimirTabla(tabla);
    //console.clear(); //Limpia la consola
}

main();