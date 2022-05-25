const { rutaEstadisticas, cargarDatos, actualizarDatos } = require("./datos.js")
const { getOne } = require("./client/getOne");
const { update } = require("./client/Update");



async function partidasTotales(estadisticas) {
    let total = 0;
    for (let i = 0; i < estadisticas.length; i++) {
        total = total + estadisticas[i];
    }
    return total;
}

async function cargarUsuario(username) {
    // Se obtiene el usuario de la BD
    let cuenta = await getOne(username);
    console.log(cuenta[0].estadisticas);
    if (cuenta[0].usuario == username) {
        let estadisticas = cuenta[0].estadisticas;
        return estadisticas;
    }

}

async function actualizarEstadisticas(username, jugada) {
    // Se obtiene el usuario de la BD
    let datos = await getOne(username);
    
    if (datos[0].usuario == username) {
        datos[0].estadisticas[jugada] = datos[0].estadisticas[jugada] + 1;
        update(username, datos[0].estadisticas);        
    }

}

async function imprimirEstadisticas(username) {
    let estadisticas = await cargarUsuario(username);
    let total = await partidasTotales(estadisticas);
    console.clear();
    console.log("");
    if (total == 0) {
        console.log("Aun no has jugado una partida!");
    } else {
        let perdidas = estadisticas[6];
        let victorias = ((total - perdidas) / total) * 100;
        victorias = victorias.toFixed(0);
        console.log(`Partidas jugadas: ${total}`)
        console.log(`Porcentaje de Victorias: ${victorias}%`);
        console.log("");
        for (let i = 0; i < estadisticas.length; i++) {
            let porcentaje = (estadisticas[i] / total) * 100;
            porcentaje = porcentaje.toFixed(0);
            if (i < 6) {
                console.log(`${i + 1}: ${estadisticas[i]} ✅ (${porcentaje}%)`)
            } else {
                console.log(`X: ${estadisticas[i]} ❌ (${porcentaje}%)`)
                console.log(""); console.log(""); console.log(""); console.log("");
            }
        }
    }
}

module.exports = {
    imprimirEstadisticas, actualizarEstadisticas, partidasTotales, cargarUsuario,
}