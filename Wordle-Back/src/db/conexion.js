const mongoose = require("mongoose");

const conexionBD = async () => {
  try {
    // Conexion a la base de datos
    await mongoose.connect(process.env.DB_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    
    console.log("Conectado a la BD...");
  } catch (error) {
    console.log("Error de conexión a la BD...");
    console.log(error);
  }
};

module.exports = { conexionBD };