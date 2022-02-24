"use strict";
const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
const { juego } = require("./juego");
const fs = require("fs");
const path = require("path");

const ruta = path.join(__dirname, "cuentas.json");

// Función que agarra las cuentas del archivo cuentas.json.
const cargarCuentas = async () => {
  //Obtiene la ruta del archivo de datos
  // Verifica la ruta del archivo
  if (fs.existsSync(ruta)) {
    //Abrir el archivo
    let archivo = fs.readFileSync(ruta);
    // Lee la información del archivo
    let datos = JSON.parse(archivo);
    //retorna la infromacion del archivo
    return datos;
  }
};

// Función que agrega una nueva cuenta a cuentas.json.
async function agregarCuentas(datos, nuevaCuenta) {
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
  for (let i = 0; i < datos.cuentas.length; i++) {
    if (datos.cuentas[i].usuario == nombreCuenta) {
      return true;
      break;
    }
  }
  return false;
}

// Función principal.
async function crearCuenta(cuentas) {
  console.clear();
  let username = prompt("Username: ");

  if (comprobarCuentas(cuentas, username) == true) {
    console.log("Existe la cuenta");
  } else {
    let contraseñaCuenta = prompt("Contraseña: ");
    let nombres = prompt("Nombres de usuario: ");
    let nuevaCuenta = {
      usuario: username,
      contraseña: contraseñaCuenta,
      Nombre: nombres,
      estadisticas: [],
    };
    cuentas.cuentas.push(nuevaCuenta);
    console.log(cuentas);
    // Convierte el objeto en string
    let cadena = JSON.stringify(cuentas);
    //console.log(cadena);
    // Escribe la cadena en el archivo JSON
    fs.writeFileSync(ruta, cadena);
  }

  //cuentas = await agregarCuentas(cuentas, nuevaCuenta);
}

async function iniciarSesion(cuentas) {
  let usuario = prompt("Username: ");
  let password = prompt("Contraseña: ");
  for (let i = 0; i < cuentas.cuentas.length; i++) {
    if (
      cuentas.cuentas[i].usuario == usuario &&
      cuentas.cuentas[i].contraseña == password
    ) {
      juego();
      break;
    }
  }
}
async function main() {
    console.clear();
  let cuentas = await cargarCuentas();
  iniciarSesion(cuentas);
  //crearCuenta();
}
main();
