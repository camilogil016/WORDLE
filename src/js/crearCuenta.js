const { app } = require("electron");
const {crearCuenta} = require("../cuentas.js");

const buttonCrear = document.getElementById("buttonCrear");
const inputUsuario = document.getElementById("inputUsuario");
const inputNombre = document.getElementById("inputNombre");
const inputContrasena = document.getElementById("inputContrasena");
const botonCrearCuenta = document.getElementById("botonCrearCuenta");

buttonCrear.addEventListener("click", async () => {
    if(await crearCuenta(inputUsuario.value,inputNombre.value,inputContrasena.value)) {
        location.href = "menu.html";
    } else {
        inputUsuario.style.borderColor = "red";
    }
  });

inputUsuario.addEventListener("input", () => {
    inputUsuario.style.borderColor = "rgb(205, 240, 205)";
    inputContrasena.style.borderColor = "rgb(205, 240, 205)";
});

inputContrasena.addEventListener("input", () => {
    inputUsuario.style.borderColor = "rgb(205, 240, 205)";
    inputContrasena.style.borderColor = "rgb(205, 240, 205)";
});

