const {ask} = require('./input.js')
const {palabraAleatoria} = require('./palabra.js')
const {imprimir} = require('./interfaz.js')

let palabraCorrecta;

// Función que pide la palabra. Solo permite palabras de 5 caracteres unicamente.
async function pedirPalabra() {
    let palabra = await ask("Palabra:");
    while(palabra.length != 5 || /[^a-z]/i.test(palabra)) {
        console.log("Escriba unicamente una palabra de 5 letras.")
        palabra = await ask("Palabra:");
    }
    return palabra;
}

// Función que verifica si la palabra tenga caracteres validos.
async function verificarPalabra(palabra) {
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
    return verificacion;
}

// Función Principal.
async function juego(username) {
    console.clear();
    palabraCorrecta = await palabraAleatoria();
    console.log(`La palabra correcta es: ${palabraCorrecta}`);
    let palabras = [
        [[' ',0],[' ',0],[' ',0],[' ',0],[' ',0]],
        [[' ',0],[' ',0],[' ',0],[' ',0],[' ',0]],
        [[' ',0],[' ',0],[' ',0],[' ',0],[' ',0]],
        [[' ',0],[' ',0],[' ',0],[' ',0],[' ',0]],
        [[' ',0],[' ',0],[' ',0],[' ',0],[' ',0]],
        [[' ',0],[' ',0],[' ',0],[' ',0],[' ',0]]
    ];
    let intento=1;
    for(let i=0;i<6;i++,intento++) {
        imprimir(palabras);
        console.log(`La palabra correcta es: ${palabraCorrecta}`);
        let palabra = await pedirPalabra();
        palabra = palabra.toUpperCase();
        palabras[i] = await verificarPalabra(palabra);
        if(palabra == palabraCorrecta) {
            break;
        }
    }
    imprimir(palabras);
    if(intento <= 6) {
        console.log(`FELICIDADES 🏆! GANO EN EL INTENTO NUMERO ${intento}`);
    } else {
        console.log("Game over! 💀");
    }
}

module.exports = {
  juego,
};