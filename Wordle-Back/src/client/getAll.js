const axios = require('axios');


const getAll = async () => {
    const respuesta = await axios.get("http://127.0.0.1:3000/cuentas")
    // Muestra las tareas
    console.log(respuesta.data);
    console.log(respuesta.status);
    
}
getAll();