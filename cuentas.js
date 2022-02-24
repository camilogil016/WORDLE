"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint: true});

const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, 'cuentas.json');

// Función que agarra las cuentas del archivo cuentas.json.
const cargarCuentas = async  () =>{
    //Obtiene la ruta del archivo de datos
    // Verifica la ruta del archivo
    if(fs.existsSync(ruta)){
        //Abrir el archivo
        let archivo = fs.readFileSync(ruta);
        // Lee la información del archivo
        let datos = JSON.parse(archivo);
        //retorna la infromacion del archivo
        return datos;
    }
};

// Función que agrega una nueva cuenta a cuentas.json.
async function agregarCuentas (datos, nuevaCuenta){
    //console.log(datos);
    //console.log(nuevaBanda);
    //agregarBandas
    datos.cuentas.push(nuevaCuenta);
    console.log(datos);
    // Convierte el objeto en string
    let cadena = JSON.stringify(datos);
    //console.log(cadena);
    // Escribe la cadena en el archivo JSON
    fs.writeFileSync(ruta, cadena);
    return datos;
}

//Función que se encarga de comprobar que la cuenta no exista ya.
async function comprobarCuentas(datos, nombreCuenta) {
}

// Función principal.
async function main() {
    console.clear();
    let cuentas = await cargarCuentas();
    let nombreCuenta = prompt("Nombre: ");
    let contraseñaCuenta = prompt("Contraseña: ");


    let nuevaCuenta = {
        name: nombreCuenta,
        year: contraseñaCuenta,
    }
    //cuentas = await agregarCuentas(cuentas, nuevaCuenta);
    comprobarCuentas(cuentas,nombreCuenta)
}

main();