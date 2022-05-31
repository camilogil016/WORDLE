const axios = require('axios');


const getPalabras = async () => {
    const respuesta = await axios.get("http://127.0.0.1:3000/palabras")
    // Muestra las tareas
    // console.log(respuesta.data);
    console.log(respuesta.status);
    return respuesta.data;
}
module.exports = {
    getPalabras,
  };