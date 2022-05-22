const express = require("express");
const Cuenta = require('../models/Cuenta')

// Creación del router
const router = express.Router();

// Obtener todad las cuentas
router.get('/', async (req, res) => {
    try {
        //Obtiene las cuentas
        const cuentas = await Cuenta.find();

        res.status(200).send(cuentas)

    } catch (error) {
        console.log(error);
        res.status(500).send({ mensaje: "Error del servidor" })
    }
});

//Obtener una sola cuenta

// Obtener todad las cuentas
router.get('/:usuario', async (req, res) => {
    try {
        // Obtiene el parametro
        const usuario = req.params.usuario;

        //Obtiene las cuenta
        const cuentas = await Cuenta.find({usuario: usuario});

        res.status(200).send(cuentas)

    } catch (error) {
        console.log(error);
        res.status(500).send({ mensaje: "Error del servidor" })
    }
});

// crear Una Cuenta
router.post('/', async (req, res) => {
    try {
        // Obtiene el body
        const body = req.body;

        // Crea al documento
        const cuenta = new Cuenta({ 
            usuario: body.usuario,
            contrasena: body.contrasena,
            nombre: body.nombre,
            estadisticas: body.estadisticas, 
        });

        //Guarda en la BD
        const resultado = await cuenta.save();

        //Responde le cliente
        res.status(201).send(resultado);

    } catch (error) {
        console.log(error);
        res.status(500).send({ mensaje: "Error del servidor" })
    }
})

// Exportar el router
module.exports = router;