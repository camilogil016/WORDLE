const teclado = document.getElementById("teclado");
const { verificarPalabra, palabraRandom } = require("../juego.js");
const {
  palabraAleatoria,
  verificarPalabraExistente,
} = require("../palabra.js");
const { actualizarEstadisticas } = require("../estadisticas");

const username = sessionStorage.getItem("username");

let fila = 1;
let columna = 1;

let palabraCorrecta;

window.onload = async function () {
  palabraCorrecta = await palabraRandom();
};

async function tecladoFuncion(idTarget) {
  const boton = document.getElementById(`${idTarget}`);
  if (idTarget != "borrar" && idTarget != "enter" && columna <= 5) {
    const letra = document.getElementById(`${fila}-${columna}`);
    columna++;
    letra.firstChild.innerHTML = `${idTarget}`;
  } else if (idTarget == "borrar" && columna > 1) {
    columna--;
    const letra = document.getElementById(`${fila}-${columna}`);
    letra.firstChild.innerHTML = ``;
  } else if (idTarget == "enter") {
    if (columna == 6) {
      let palabra = "";
      for (let i = 1; i < 6; i++) {
        const letra = document.getElementById(`${fila}-${i}`);
        palabra = palabra + letra.firstChild.textContent;
      }
      if (await verificarPalabraExistente(palabra)) {
        let palabras = await verificarPalabra(palabra);
        for (let i = 1; i < 6; i++) {
          const letra = document.getElementById(`${fila}-${i}`);
          const boton = document.getElementById(`${palabras[i - 1][0]}`);
          console.log(boton.style.background);
          if (palabras[i - 1][1] == "0") {
            //boton.style.background == "" ? boton.style.background = "red" :;
            letra.style.color = "red";
            if (
              boton.style.background != "rgb(109, 169, 101)" &&
              boton.style.background != "orange"
            ) {
              boton.style.background = "red";
            }
          } else if (palabras[i - 1][1] == "1") {
            letra.style.color = "orange";
            if (boton.style.background != "green") {
              boton.style.background = "orange";
            }
          } else if (palabras[i - 1][1] == "2") {
            letra.style.color = "rgb(109, 169, 101)";
            boton.style.background = "rgb(109, 169, 101)";
          }
        }
        console.log(palabraCorrecta);
        if (palabra == palabraCorrecta) {
          //await actualizarEstadisticas(username,fila);
          alert(`FELICIDADES 🏆! GANO EN EL INTENTO NUMERO ${fila}`);
          await actualizarEstadisticas(username, fila - 1);
          location.href = "estadisticas.html";
        } else if (fila == 6) {
          alert(`Game over! 💀. La palabra correcta era ${palabraCorrecta}`);
          await actualizarEstadisticas(username, fila);
          location.href = "estadisticas.html";
        }
        fila++;
        columna = 1;
      } else {
        alert("La palabra no existe.");
      }
    } else {
      alert("No hay suficientes letras.");
    }
  }
}

document.addEventListener("keydown", logKey);
function logKey(e) {
  console.log(e.code);
  let seguir = false;
  if (e.code.substring(0, 3) == "Key" || e.code == "Enter" || e.code == "Semicolon" || e.code == "Digit0") {
    seguir = true;
  }
  if (seguir) {
    let letra = "enter";
    if (e.code.substring(0, 3) == "Key") {
      letra = e.code.substring(3, 4);
    } else if (e.code == "Semicolon") {
      letra = "Ñ";
    } else if (e.code == "Digit0") {
      letra = "borrar";
    }
    tecladoFuncion(letra);
  }
}

teclado.addEventListener("click", async (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    tecladoFuncion(event.target.id);
  }
});
