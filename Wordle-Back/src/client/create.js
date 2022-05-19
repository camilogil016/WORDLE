const axios = require('axios');



const create = async (user,name,password) => {
    const respuesta = await axios.post("http://127.0.0.1:3000/cuentas", {
        usuario: user,
        contrasena: password,
        nombre: name,
        estadisticas: [0, 0, 0, 0, 0, 0, 0]
    })
    // Muestra las tareas
    console.log(respuesta.data);
    console.log(respuesta.status);

}
create();

module.exports = {
    create,
  };