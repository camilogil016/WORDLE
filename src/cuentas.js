const {
  rutaCuentas,
  rutaEstadisticas,
  cargarDatos,
  agregarDatos,
} = require("./datos.js");
const { ask, askPasswords } = require("./input.js");
var CryptoJS = require("crypto-js");
require('dotenv').config()


//Función que se encarga de comprobar que la cuenta no exista ya.
async function comprobarCuentas(datos, nombreCuenta) {
  for (let i = 0; i < datos.cuentas.length; i++) {
    //Busca cada cuenta para comprobar si existe
    if (datos.cuentas[i].usuario == nombreCuenta) {
      return true;
      break;
    }
  }
  return false;
}

async function crearEstadisticas(username) {
  let nuevaEstadistica = {
    usuario: username,
    estadisticas: [0, 0, 0, 0, 0, 0, 0],
  };
  let cuentas = await cargarDatos(rutaEstadisticas);
  await agregarDatos(cuentas, nuevaEstadistica, rutaEstadisticas);
}

// Función que se encarga de crear una cuenta
async function crearCuenta() {
  let cuentas = await cargarDatos(rutaCuentas);
  let username = await askPasswords("Username:");
  if ((await comprobarCuentas(cuentas, username)) == true) {
    console.log("Esta cuenta ya existe. \nIntentelo nuevamente");
    await crearCuenta();
  } else {
    let contrasenaCuenta = await ask("Contraseña:");
    var contrasenaEn = CryptoJS.AES.encrypt(
      contrasenaCuenta,
      process.env.SECRET_KEY
    ).toString();
    let nombres = await ask("Nombres de usuario:");
    let nuevaCuenta = {
      usuario: username,
      contrasena: contrasenaEn,
      Nombre: nombres,
    };
    await agregarDatos(cuentas, nuevaCuenta, rutaCuentas);
    await crearEstadisticas(username);
  }
}

async function iniciarSesion() {
  let cuentas = await cargarDatos(rutaCuentas);
  let usuario = await ask("Username:");
  let password = await askPasswords("Contraseña:");
  for (let i = 0; i < cuentas.cuentas.length; i++) {
    var bytes = CryptoJS.AES.decrypt(cuentas.cuentas[i].contrasena, process.env.SECRET_KEY);
    var contrasena = bytes.toString(CryptoJS.enc.Utf8);
    if (
      cuentas.cuentas[i].usuario == usuario &&
      contrasena == password
    ) {
      incorrecto = false;
      return [true, usuario];
      break;
    }
  }
  return false;
}

module.exports = {
  iniciarSesion,
  crearCuenta,
};
