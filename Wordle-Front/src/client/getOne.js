const axios = require('axios');


const getOne = async (username) => {
    const respuesta = await axios.get(`http://127.0.0.1:3000/cuentas/${username}`)
    // Muestra las tareas
    console.log(respuesta.data);
    console.log(respuesta.status);
    return respuesta.data
}

module.exports = {
    getOne,
  };