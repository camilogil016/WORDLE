const {partidasTotales, cargarUsuario} = require("../estadisticas.js")
const username = sessionStorage.getItem("username");

const jugadasTxt = document.getElementById("jugadas");
const porcentajeTxt = document.getElementById("porcentaje");

async function imprimirEstadisticas() {
    let estadisticas = await cargarUsuario(username);
    let total = await partidasTotales(estadisticas);
    let perdidas = estadisticas[6];
    let victorias = ((total-perdidas)/total)*100 || 0;
    victorias = victorias.toFixed(0);
    jugadasTxt.textContent = total;
    porcentajeTxt.textContent = victorias + "%";
    for(let i=0;i<estadisticas.length;i++) {
        let porcentaje = (estadisticas[i]/total)*100 || 0;
        porcentaje = porcentaje.toFixed(0);
        const txt = document.getElementById(`${i+1}`);
        if(i<6) {
            txt.textContent = `${i+1}: ` + "⬛".repeat(20*(porcentaje/100)) + `  (${porcentaje}%)`;
        } else {
            txt.textContent = `X: ` + "⬛".repeat(20*(porcentaje/100)) + `  (${porcentaje}%)`;
        }
    }
}

window.onload = function() {
    imprimirEstadisticas();
};