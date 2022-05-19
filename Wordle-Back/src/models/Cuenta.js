const mongoose = require('mongoose');

// Definición del esquema
const CuentaSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    descripcion: String,
    contrasena: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    estadisticas:{
        type: Array,
        required: true
    }
})

// Exportar el esquema
module.exports = mongoose.model('Cuenta', CuentaSchema);