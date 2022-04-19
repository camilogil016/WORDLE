const teclado = document.getElementById('teclado2');

let fila = 1;
let columna = 1;

teclado.addEventListener("click", async (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    } else {
        const boton = document.getElementById(`${event.target.id}`);
        const letra = document.getElementById(`${fila}-${columna}`)
        columna++;
        letra.firstChild.innerHTML = `${event.target.id}`;
        boton.style.background = "black";
    }

    console.dir(event.target.id);

});