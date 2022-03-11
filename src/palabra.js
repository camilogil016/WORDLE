const { Console } = require('console');
const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, '../json/palabras.json');

async function cargarPalabras() {
    if(fs.existsSync(ruta)){
        //Abrir el archivo 
        let archivo = fs.readFileSync(ruta);
        // Lee la información del archivo
        let datos = JSON.parse(archivo);
        // retorna los datos
        return datos;
    }
}

async function verificarPalabraExistente(palabra) {
    // retorna la información del archivo JSON
    let datos = await cargarPalabras();
    let x = false;
    // Se hace un ciclo con al finalidad de corroborar que existe la palabra en el JSO
    for(let i=0;i<datos.palabras.length;i++) {
        // comparación de buscar la palabra
        if(datos.palabras[i] == palabra) {
            x = true;
            break;
        }
    }
    return x;
}

async function palabraAleatoria() {
    // Se crea un random para obtener la palabra del archivo
    let aleatorio = Math.round(Math.random() * 1000);
    // Se obtiene los datos de palabras
    let datos = await cargarPalabras();
    // luego se extrae la palabra del archivo segun la posición  del random
    let palabra = datos.palabras[aleatorio];
    console.log(palabra);
    return palabra;
}

module.exports = {
    palabraAleatoria, verificarPalabraExistente
}