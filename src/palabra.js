const { Console } = require('console');
const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, '../json/palabras.json');

//Funcion que se encarga de cargar todas las palabras
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

//Funcion que se encarga de verificar si la palabra que digito el usuario existe en el json y devuelve un boolean
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

//Función que se encarga de generar valor aleatorio y devolver la palabra del archivo palabras.json
async function palabraAleatoria() {
    let aleatorio = Math.round(Math.random() * 1000);   //Se elige entre las primeras 1000 palabras
    let datos = await cargarPalabras();
    let palabra = datos.palabras[aleatorio];
    console.log(palabra);
    return palabra;
}

module.exports = {
    palabraAleatoria, verificarPalabraExistente
}