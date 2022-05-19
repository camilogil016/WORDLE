const {ask} = require('./input.js')
const {palabraAleatoria, verificarPalabraExistente} = require('./palabra.js')
const {imprimir} = require('./interfaz.js')
const {actualizarEstadisticas} = require('./estadisticas')

let palabraCorrecta;

// Función que pide la palabra. Solo permite palabras de 5 caracteres unicamente.
async function pedirPalabra() {
    let palabra = await ask("Palabra:");
    palabra = palabra.toUpperCase();
    let noExiste = await verificarPalabraExistente(palabra);
    while(palabra.length != 5 || /[^a-z]/i.test(palabra) || !noExiste == true) {
        if(palabra.length != 5) {   //La palabra tiene que ser de 5 caracteres
            console.log("❌ Escriba unicamente una palabra de 5 letras.")
        }
        if(/[^a-z]/i.test(palabra)) {   //La palabra debe contener caracteres de la A la Z
            console.log("❌ Solo se aceptan caracteres de la A hasta la Z.")
        }
        if(!noExiste == true) { //La palabra debe existir en palabras.json
            console.log("❌ La palabra no esta en el diccionario.")
        }
        palabra = await ask("Palabra:");
        palabra = await palabra.toUpperCase();
        noExiste = await verificarPalabraExistente(palabra);
    }
    return palabra;
}

async function palabraRandom() {
    palabraCorrecta = await palabraAleatoria();
    return palabraCorrecta;
}

// Función que verifica si la palabra tenga caracteres validos.
async function verificarPalabra(palabra) {
    let verificacion = [...Array(palabra.length)].map(e => Array(2)); //Se crea una matrix vacia
    let letras = palabraCorrecta; //Se guardan las letras que son correctas
    for(let i=0,c=0;i<palabra.length;i++) {
        verificacion[i][0] = palabra.charAt(i); //Se guarda cada caracter en parte de la matrix
        verificacion[i][1] = 0; //Valor 0 para indicar que la letra no esta en el lugar correcto
        if(palabra.charAt(i) == palabraCorrecta.charAt(i)) {    //Si la letra esta en la posicion correcta
            verificacion[i][1] = 2; //2 de decir caracter correcto y posicion correcta
            letras = letras.substring(0,i-c)+letras.substring(i+1-c,letras.length); //Se elimina el caracter pues ya ha sido usado
            c++;
            //console.log(letras);
        }
    }
    while(letras.length != 0) { 
        for(let i=0;i<palabra.length;i++) {
            if(verificacion[i][1] != 2) {
                if(letras.charAt(0) == palabra.charAt(i)) { //Verifica si el caracter existe
                    verificacion[i][1] = 1; //1 De lugar incorrecto
                    letras = letras.substring(1);   //Se borra el caracter
                } else {
                    verificacion[i][1] = 0;
                }
            }
        }
        letras = letras.substring(1); //Al final se borrara el caracter
    }
    return verificacion;
}

// Función Principal.
async function juego(username) {
    console.clear();
    palabraCorrecta = await palabraAleatoria();
    console.log(`La palabra correcta es: ${palabraCorrecta}`);
    // Se crea matrix de 6x5x2, donde los primeros 6 es para guardar los 6 intentos de palabra.
    // Los 5 es para cada caracter y tendra un valor de -1(Letra no usada), 0(Letra no existente)
    // 1(Letra existente en posicion equivocada) y 2(Letra correcta en posición correcta)
    let palabras = [
        [[' ',-1],[' ',-1],[' ',-1],[' ',-1],[' ',-1]],
        [[' ',-1],[' ',-1],[' ',-1],[' ',-1],[' ',-1]],
        [[' ',-1],[' ',-1],[' ',-1],[' ',-1],[' ',-1]],
        [[' ',-1],[' ',-1],[' ',-1],[' ',-1],[' ',-1]],
        [[' ',-1],[' ',-1],[' ',-1],[' ',-1],[' ',-1]],
        [[' ',-1],[' ',-1],[' ',-1],[' ',-1],[' ',-1]]
    ];
    let intento=1; // se guardan los intentos
    for(let i=0;i<6;i++,intento++) {
        imprimir(palabras);
        console.log(`La palabra correcta es: ${palabraCorrecta}`);
        let palabra = await pedirPalabra();
        palabras[i] = await verificarPalabra(palabra);
        if(palabra == palabraCorrecta) { //En caso de que la palabra sea directamente la palabra correcta se sale
            break;
        }
    }
    imprimir(palabras);
    if(intento <= 6) {  //Si gano en menos de los 6 intentos, significa que gano.
        console.log(`FELICIDADES 🏆! GANO EN EL INTENTO NUMERO ${intento}`);
        await actualizarEstadisticas(username,intento-1);
    } else { //Si uso los 6 intentos, se mostrara que el usuario perdio.
        console.log("Game over! 💀");
        await actualizarEstadisticas(username,intento-1);
    }
}

module.exports = {
  juego, verificarPalabra, palabraRandom,
};