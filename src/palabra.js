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
    let datos = await cargarPalabras();
    let x = false;
    for(let i=0;i<datos.palabras.length;i++) {
        if(datos.palabras[i] == palabra) {
            x = true;
            break;
        }
    }
    return x;
}

async function palabraAleatoria() {
    let aleatorio = Math.round(Math.random() * 1000);
    let datos = await cargarPalabras();
    let palabra = datos.palabras[aleatorio];
    console.log(palabra);
    return palabra;
}

module.exports = {
    palabraAleatoria, verificarPalabraExistente
}