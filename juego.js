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

async function verificarPalabra(palabra) {
    let verificacion = [...Array(palabra.length)].map(e => Array(2));
    let letras = palabraCorrecta;
    for(let i=0;i<palabra.length;i++) {
        let letra = letras.charAt(0);
        verificacion[i][0] = palabra.charAt(i);
        verificacion[i][1] = 0;
        for(let j=0;j<palabraCorrecta.length;j++) {
            if(letra == palabra.charAt(j)) {
                if(palabraCorrecta.charAt(j) == palabra.charAt(j)) {
                    verificacion[j][1] = 2;
                } else {
                    let verificar = false;
                    for(let x=j;x<palabraCorrecta.length;x++) {
                        if(palabraCorrecta.charAt(x) == palabra.charAt(x) && palabra.charAt(x) == letra) {
                            console.log("Hola")
                            verificar = true;
                        }
                    }
                    if(verificar == false) {
                        verificacion[j][1] = 1;
                    }
                    
                }
            }
        }
        letras = letras.substring(1);
    }
    console.log(verificacion);
}

async function verificarPalabra2(palabra) {
    let verificacion = [...Array(palabra.length)].map(e => Array(2));
    let letras = palabraCorrecta;
    for(let i=0,c=0;i<palabra.length;i++) {
        verificacion[i][0] = palabra.charAt(i);
        verificacion[i][1] = 0;
        if(palabra.charAt(i) == palabraCorrecta.charAt(i)) {
            verificacion[i][1] = 2;
            letras = letras.substring(0,i-c)+letras.substring(i+1-c,letras.length);
            c++;
            //console.log(letras);
        }
    }
    while(letras.length != 0) {
        for(let i=0;i<palabra.length;i++) {
            if(verificacion[i][1] != 2) {
                if(letras.charAt(0) == palabra.charAt(i)) {
                    verificacion[i][1] = 1;
                    letras = letras.substring(1);
                }
            }
        }
        letras = letras.substring(1);
    }
    console.log(verificacion);
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
    console.log("---------------------------------------------------------------------------");
    let tabla = [
        ["00000", ""],
        ["00000", ""],
        ["00000", ""],
        ["00000", ""],
        ["00000", ""],
        ["00000", ""],
    ]
    await verificarPalabra2("MAAAA");
    console.log(palabraCorrecta.indexOf("Ñ"))
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

juego();