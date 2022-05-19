const express = require("express");
const Cuenta = require('../models/Cuenta')

// Creación del router
const router = express.Router();

// Obtener todad las tareas
router.get('/', async (req, res) => {
    try {
        //Obtiene las tareas
        const cuentas = await Cuenta.find();

        res.status(200).send(cuentas)

    } catch (error) {
        console.log(error);
        res.status(500).send({ mensaje: "Error del servidor" })
    }
});

// Exportar el router
module.exports = router;