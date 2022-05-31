const mongoose = require('mongoose');

// Definición del esquema
const PalabraSchema = mongoose.Schema({
    palabras: {
        type: String,
        required: true
    },
})

// Exportar el esquema
module.exports = mongoose.model('Palabra', PalabraSchema);