const fs = require("fs");
const path = require("path");
const {ask} = require("./input.js")

const ruta = path.join(__dirname, "../json/cuentas.json");  //Obtiene la ruta del archivo de datos

// Función que agarra las cuentas del archivo cuentas.json.
const cargarCuentas = async () => {
  if (fs.existsSync(ruta)) {  // Verifica si la ruta del archivo existe
    let archivo = fs.readFileSync(ruta);  // Abre el archivo
    let datos = JSON.parse(archivo);    // Agarra los datos del archivo
    return datos;
  }
};

// Función que agrega una nueva cuenta a cuentas.json.
async function agregarCuentas(datos, nuevaCuenta) {
  datos.cuentas.push(nuevaCuenta);    // Pega los nuevos datos
  let cadena = JSON.stringify(datos); // Convierte el objeto en string
  fs.writeFileSync(ruta, cadena);     // Escribe la cadena en el archivo JSON
  return datos;
}

//Función que se encarga de comprobar que la cuenta no exista ya.
async function comprobarCuentas(datos, nombreCuenta) {
  for (let i = 0; i < datos.cuentas.length; i++) {  //Busca cada cuenta para comprobar si existe
    if (datos.cuentas[i].usuario == nombreCuenta) {
      return true;
      break;
    }
  }
  return false;

}

// Función que se encarga de crear una cuenta
async function crearCuenta() {
  //await console.clear();                                    //Limpia la consola
  let cuentas = await cargarCuentas();
  let username = await ask("Username:");
  if (await comprobarCuentas(cuentas, username) == true) {  
    console.log("Esta cuenta ya existe. \nIntentelo nuevamente");
    await crearCuenta();
  } else {
    let contraseñaCuenta = await ask("Contraseña:");
    let nombres = await ask("Nombres de usuario:");
    let nuevaCuenta = {
      usuario: username,
      contraseña: contraseñaCuenta,
      Nombre: nombres,
      estadisticas: [],
    };
    cuentas.cuentas.push(nuevaCuenta);
    // Convierte el objeto en string
    let cadena = JSON.stringify(cuentas);
    //console.log(cadena);
    // Escribe la cadena en el archivo JSON
    fs.writeFileSync(ruta, cadena);
  }

  //cuentas = await agregarCuentas(cuentas, nuevaCuenta);

}

async function iniciarSesion() {
  let cuentas = await cargarCuentas();
  let usuario = await ask("Username:");
  let password = await ask("Contraseña:");
  for (let i = 0; i < cuentas.cuentas.length; i++) {
    if (cuentas.cuentas[i].usuario == usuario && cuentas.cuentas[i].contraseña == password) {
      incorrecto = false;
      return true;
      break;
    }
  }
  return false;
}

module.exports ={
  iniciarSesion, crearCuenta
}

