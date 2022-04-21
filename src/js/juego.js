const teclado = document.getElementById('teclado');
const {verificarPalabra, palabraRandom} = require("../juego.js");
const {palabraAleatoria} = require("../palabra.js");
const {actualizarEstadisticas} = require('../estadisticas')

const username = sessionStorage.getItem("username");

let fila = 1;
let columna = 1;

let palabraCorrecta;

window.onload = async function() {
    palabraCorrecta = await palabraRandom();
};

teclado.addEventListener("click", async (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    } else {
        let idTarget = event.target.id;
        const boton = document.getElementById(`${idTarget}`);
        if(idTarget != "borrar" && idTarget != "enter" && columna<=5) {
            const letra = document.getElementById(`${fila}-${columna}`);
            columna++;
            letra.firstChild.innerHTML = `${idTarget}`;
        } else if (idTarget == "borrar" && columna >1) {
            columna--;
            const letra = document.getElementById(`${fila}-${columna}`);
            letra.firstChild.innerHTML = ``;
        } else if (idTarget == "enter") {
            if(columna == 6) {
                let palabra = "";
                for(let i=1;i<6;i++) {
                    const letra = document.getElementById(`${fila}-${i}`);
                    palabra = palabra + letra.firstChild.textContent;;
                }
                let palabras = await verificarPalabra(palabra);
                console.log(palabras)
                for(let i=1;i<6;i++) {
                    const letra = document.getElementById(`${fila}-${i}`);
                    const boton = document.getElementById(`${palabras[i-1][0]}`);
                    if(palabras[i-1][1] == "0") {
                        letra.style.color = "red";
                        boton.style.background = "red";
                    } else if(palabras[i-1][1] == "1") {
                        letra.style.color = "orange";
                        boton.style.background = "orange";
                    } else if(palabras[i-1][1] == "2") {
                        letra.style.color = "rgb(109, 169, 101)";
                        boton.style.background = "rgb(109, 169, 101)";
                    }
                }
                console.log(palabraCorrecta);
                if(palabra == palabraCorrecta) {
                    //await actualizarEstadisticas(username,fila);
                    alert(`FELICIDADES 🏆! GANO EN EL INTENTO NUMERO ${fila}`);
                    await actualizarEstadisticas(username,fila-1);
                    location.href = "estadisticas.html";
                } else if(fila==6) {
                    alert("Game over! 💀");
                    await actualizarEstadisticas(username,fila);
                    location.href = "estadisticas.html";
                }
                fila++;
                columna = 1;
            } else {
                alert("No hay suficientes letras.");
            }
        }
    }
});