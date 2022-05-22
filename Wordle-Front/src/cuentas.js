const {
  rutaCuentas,
  rutaEstadisticas,
  cargarDatos,
  agregarDatos,
} = require("./datos.js");

const { ask, askPasswords } = require("./input.js");
const { create } = require("../../Wordle-Back/src/client/create");
const { getOne } = require("../../Wordle-Back/src/client/getOne");

var CryptoJS = require("crypto-js");
require('dotenv').config()
const SECRET_KEY = "asfagasfgfdayt3423532654dfgbh..dsEWE";

//Función que se encarga de comprobar que la cuenta no exista ya.
async function comprobarCuentas(nombreCuenta) {

  let cuenta = await getOne(nombreCuenta);
  console.log(cuenta);
  if (cuenta.length > 0) {
    console.log("La cuenta Existencia");
    return true;
  }
  return false;
}
// function que permite crear las estadisticas
async function crearEstadisticas(username) {
  // se agrega al JSON las estadisticas por username con un vector de 7 posición
  // let nuevaEstadistica = {
  //   usuario: username,
  //   estadisticas: [0, 0, 0, 0, 0, 0, 0],
  // };
  // // se cargan los datos en el JSON 
  // let cuentas = await cargarDatos(rutaEstadisticas);
  // await agregarDatos(cuentas, nuevaEstadistica, rutaEstadisticas);
}

// Función que se encarga de crear una cuenta
async function crearCuenta(username, nombres, contrasenaCuenta) {

  //let username = await askPasswords("Username:");
  // se usa el metodo comprobarCuentas para saber si existe o no existe

  if ((await comprobarCuentas(username)) == true) {
    console.log("Esta cuenta ya existe. \nIntentelo nuevamente");
    //await crearCuenta();
    return false;
  } else {

    // Se pide la contraseña de manera que el usuario no la pueda observar
    //let contrasenaCuenta = await askPasswords("Contraseña:");
    // con la contraseña ingresada se hace uso de CryptoJS para encriptar
    //Asi mismo, se hace uso de una variable de entorno y por medio de la libreria dotenv

    var contrasenaEn = CryptoJS.AES.encrypt(
      contrasenaCuenta,
      SECRET_KEY
    ).toString();
    // Se ingresa los nombres del usuario
    //let nombres = await ask("Nombres de usuario:");
    // Se crea un objeto con los parametros para despues agregarlos al JSON
    // let nuevaCuenta = {
    //   usuario: username,
    //   contrasena: contrasenaEn,
    //   Nombre: nombres,
    // };
    // se agrega el objeto para ser guardado
    await create(username, nombres, contrasenaEn)
    // await agregarDatos(cuentas, nuevaCuenta, rutaCuentas);
    //await crearEstadisticas(username);
    return true;
  }
}

async function iniciarSesion(usuario, password) {
  // Se obtiene el documento de la base de datos
  if (await comprobarCuentas(usuario) == true) {
    let cuenta = await getOne(usuario);
    console.log(cuenta);
    // Se desencripta la contraseña del JSON para hacer la comparación
    var bytes = CryptoJS.AES.decrypt(cuenta[0].contrasena, SECRET_KEY);
    var contrasena = bytes.toString(CryptoJS.enc.Utf8);
    // Si la condicion es correcta, osea la contraseña existe se retonra un vector para seguir con el algoritmo
    if (cuenta[0].usuario == usuario && contrasena == password) {
      incorrecto = false;
      return [true, usuario];
    } else {
      return false;
    }
  }
}

module.exports = {
  iniciarSesion,
  crearCuenta,
};
