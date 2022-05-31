const axios = require('axios');


const getWord = async (palabra) => {
    const respuesta = await axios.get(`http://127.0.0.1:3000/palabras/${palabra}`)
    // Muestra las tareas
    // console.log(respuesta.data);
    console.log(respuesta.status);
    return respuesta.data
}

module.exports = {
    getWord,
  };