const fs = require("fs");
const path = require("path");
const {ask} = require("./input.js")

const rutaCuentas = path.join(__dirname, "../json/cuentas.json");  //Obtiene la ruta del archivo de datos
const rutaEstadisticas = path.join(__dirname, "../json/estadisticas.json")

const cargarDatos = async (ruta) => {
    if (fs.existsSync(ruta)) {  // Verifica si la ruta del archivo existe
      let archivo = fs.readFileSync(ruta);  // Abre el archivo
      let datos = JSON.parse(archivo);    // Agarra los datos del archivo
      return datos;
    }
  }
  
  // Función que agrega una nueva cuenta a cuentas.json.
  async function agregarDatos(datos, nuevoDatos, ruta) {
    datos.cuentas.push(nuevoDatos);    // Pega los nuevos datos
    let cadena = JSON.stringify(datos); // Convierte el objeto en string
    fs.writeFileSync(ruta, cadena);     // Escribe la cadena en el archivo JSON
    return datos;
  }

module.exports ={
    rutaCuentas, rutaEstadisticas, cargarDatos, agregarDatos
  }