//Imporar los paquetes
const express = require('express');

// crea el router
const router = express.Router();

// Ruta raiz
router.get('/', (req, res)=> {
    res.send({
        mensaje: 'API de WORDLE'
    });
})

module.exports = router;