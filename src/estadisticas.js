const {rutaEstadisticas, cargarDatos} = require("./datos.js")

async function partidasTotales(estadisticas) {
    let total = 0;
    for(let i=0;i<estadisticas.length;i++) {
        total = total + estadisticas[i];
    }
    return total;
}

async function cargarUsuario(username) {
    let datos = await cargarDatos(rutaEstadisticas);
    for(let i=0;i<datos.cuentas.length;i++) {
        if(datos.cuentas[i].usuario == username) {
            let estadisticas = datos.cuentas[i].estadisticas;
            return estadisticas;
            break;
        }
    }
}

async function imprimirEstadisticas(username) {
    let estadisticas = await cargarUsuario(username);
    let total = await partidasTotales(estadisticas);
    console.clear();
    console.log("");
    if(total == 0) {
        console.log("Aun no has jugado una partida!");
    } else {
        let perdidas = estadisticas[6];
        let victorias = (perdidas/total)*100;
        console.log(`Partidas jugadas: ${total}`)
        console.log(`Porcentaje de Victorias: ${victorias}%`);
        console.log("");
        for(let i=0;i<estadisticas.length;i++) {
            let porcentaje = (estadisticas[i]/total)*100;
            if(i<6) {
                console.log(`${i+1}: ${estadisticas[i]} ✅ (${porcentaje}%)`)
            } else {
                console.log(`X: ${estadisticas[i]} ❌ (${porcentaje}%)`)
                console.log(""); console.log(""); console.log(""); console.log("");
            }
        }
    }
}

module.exports = {
    imprimirEstadisticas
}