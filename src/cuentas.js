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
// function que permite crear las estadisticas
async function crearEstadisticas(username) {
  // se agrega al JSON las estadisticas por username con un vector de 7 posición
  let nuevaEstadistica = {
    usuario: username,
    estadisticas: [0, 0, 0, 0, 0, 0, 0],
  };
  // se cargan los datos en el JSON 
  let cuentas = await cargarDatos(rutaEstadisticas);
  await agregarDatos(cuentas, nuevaEstadistica, rutaEstadisticas);
}

// Función que se encarga de crear una cuenta
async function crearCuenta(username,nombres,contrasenaCuenta) {
  let cuentas = await cargarDatos(rutaCuentas);

  //let username = await askPasswords("Username:");
  // se usa el metodo comprobarCuentas para saber si existe o no existe

  if ((await comprobarCuentas(cuentas,username)) == true) {
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
      process.env.SECRET_KEY
    ).toString();
    // Se ingresa los nombres del usuario
    //let nombres = await ask("Nombres de usuario:");
    // Se crea un objeto con los parametros para despues agregarlos al JSON
    let nuevaCuenta = {
      usuario: username,
      contrasena: contrasenaEn,
      Nombre: nombres,
    };
    // se agrega el objeto para ser guardado
    await agregarDatos(cuentas, nuevaCuenta, rutaCuentas);
    await crearEstadisticas(username);
    return true;
  }
}

async function iniciarSesion(usuario, password) {
  // Se carga los datos obtenidos del JSON de cuentas
  let cuentas = await cargarDatos(rutaCuentas);
  // Se piden los datos necesarios para iniciarSesion
  //let usuario = await ask("Username:");
  //let password = await askPasswords("Contraseña:");
  for (let i = 0; i < cuentas.cuentas.length; i++) {
    // Se desencripta la contraseña del JSON para hacer la comparación
    var bytes = CryptoJS.AES.decrypt(cuentas.cuentas[i].contrasena, process.env.SECRET_KEY);
    var contrasena = bytes.toString(CryptoJS.enc.Utf8);
    // Si la condicion es correcta, osea la contraseña existe se retonra un vector para seguir con el algoritmo
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
