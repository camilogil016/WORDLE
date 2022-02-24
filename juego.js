"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint: true});
let palabraCorrecta = "AUDIO";

// Función que pide la palabra. Solo permite palabras de 5 caracteres unicamente.
function pedirPalabra() {
    let palabra = prompt("Palabra: ");
    while(palabra.length != 5 || /[^a-z]/i.test(palabra)) {
        console.log("Escriba unicamente una palabra de 5 letras.")
        palabra = prompt("Palabra: ");
    }
    return palabra;
}

// Función que verifica si la palabra tenga caracteres validos.
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

function verificarPalabra2(palabra) {
    let verificacion = [...Array(palabra.length)].map(e => Array(2));
    let letras = palabraCorrecta;
    for(let i=0;i<palabra.length;i++) {
        verificacion[i][0] = palabra.charAt(i);
        verificacion[i][1] = 0;
    }
    while(letras != "") {
        for(let i=0;i<palabra.length;i++) {

        }
        letras = letras.substring(1);
    }
    console.log(verificacion)
}

// Función que imprime la tabla.
function imprimirTabla(tabla) {
    for(let i=0;i<6;i++) {
        verificarPalabra(tabla[i]);

    }
}

// Función Principal.
async function juego() {
    console.clear();
    let tabla = [
        ["00000", ""],
        ["00000", ""],
        ["00000", ""],
        ["00000", ""],
        ["00000", ""],
        ["00000", ""],
    ]
    verificarPalabra2("sexo");
    let z = `\x1b[33mA\x1b[32mB`;
    //let palabra = pedirPalabra();
    //palabra = palabra.toUpperCase();
    //verificarPalabra("TONTE");
    /*for(let i=0;i<6;i++) {
        imprimirTabla(tabla);
        let palabra = pedirPalabra();
        palabra = palabra.toUpperCase();
        tabla[i] = palabra;
        console.clear();
    }*/
    //imprimirTabla(tabla);
    //console.clear(); //Limpia la consola
}

module.exports = {
    juego
}