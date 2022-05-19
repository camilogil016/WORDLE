// Carga las variables de entorno del archivo .env
require("dotenv").config();

// Importar paquetes
const express = require('express')	
const cors = require('cors')

// Importa la función de conexión
const { conexionBD } = require("./db/conexion");

//Crea la aplicación
const app = express();

//Importa la ruta
const cuentasRoutes = require('./routes/cuentas')
const inicioRoutes = require('./routes/inicio')


// Middleware
app.use(express.json());//Habilita el body en el router
app.use(cors());//
app.use('/',inicioRoutes);
app.use('/cuentas', cuentasRoutes)


// Invoca la función de conexión a la BD
conexionBD();

//Inica el servidor
app.listen(3000)