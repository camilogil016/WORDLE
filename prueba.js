const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, 'palabras.json');

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

async function main() {
    let palabra = Math.round(Math.random() * 1000)  
    console.log(palabra);
    let palabras = cargarPalabras();
    console.log(palabras[palabra]);
}
main()