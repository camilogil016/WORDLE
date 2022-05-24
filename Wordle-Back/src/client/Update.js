const axios = require('axios');

const update = async (username, estadisticas) => {
    const respuesta = await axios.patch(`http://127.0.0.1:3000/cuentas/${username}`,
    {
        estadisticas: estadisticas,
    })
    // Muestra las tareas
    console.log(respuesta.data);
    console.log(respuesta.status);
    
}
// update('Pepe',esta);
module.exports = {
    update,
  };