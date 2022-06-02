const { Console } = require('console');
const fs = require('fs');
const path = require('path');

const { getWord } = require("./client/getWord");
const { getPalabras} = require("./client/getPalabras");

//Funcion que se encarga de cargar todas las palabras

//Funcion que se encarga de verificar si la palabra que digito el usuario existe en la DB y devuelve un boolean
async function verificarPalabraExistente(palabra) {
    // retorna la información del archivo JSON
    let word = await getWord(palabra);
    console.log(word);
    if (word.length > 0) {
        console.log("ENTROOO");
        return true;
    }
    return false;
    // Se hace un ciclo con al finalidad de corroborar que existe la palabra en el JSO
}

//Función que se encarga de generar valor aleatorio y devolver la palabra del archivo palabras.json
async function palabraAleatoria() {
    // Se crea un random para obtener la palabra del archivo
    let aleatorio = Math.round(Math.random() * 1000);
    // Se obtiene los datos de palabras
    console.log(aleatorio);
    let datos = await getPalabras();
    console.log(datos);
    // luego se extrae la palabra del archivo segun la posición  del random
    let palabra = datos[aleatorio].palabras;
    console.log(palabra);
    return palabra;
}

module.exports = {
    palabraAleatoria, verificarPalabraExistente
}