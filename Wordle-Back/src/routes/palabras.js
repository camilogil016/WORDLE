const express = require("express");
const Palabra = require('../models/Palabra')

// Creación del router
const router = express.Router();

// Obtener todad las cuentas
router.get('/', async (req, res) => {
    try {
        //Obtiene las cuentas
        const palabras = await Palabra.find();

        res.status(200).send(palabras)

    } catch (error) {
        console.log(error);
        res.status(500).send({ mensaje: "Error del servidor" })
    }
});

//Obtener una sola cuenta

router.get('/:palabras', async (req, res) => {
    try {
        // Obtiene el parametro
        const palabra = req.params.palabra;

        //Obtiene las cuenta
        const cuentas = await Palabra.find({palabra: palabra});

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
        const cuenta = new Palabra({ 
           palabra: body.palabra,
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

//Modificar la tarea
router.patch("/:palabra", async (req, res) => {
    //Obtiene el ID de la tarea a Modificar
    const usuario = req.params.usuario;
    //Obtiene el body
    const body = req.body;
    //Obtiene la tarea
    try {
        const tarea = await Cuenta.findOneAndUpdate({ usuario: usuario }, body, { new: true, });
        if (tarea == null) {
            return res.status(404).send({ message: 'Tarea not found' });
        } else {
            res.status(200).send(tarea);

        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ mensaje: 'Error de servidor' });
    }

})
// Exportar el router
module.exports = router;