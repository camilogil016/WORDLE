const { app } = require("electron");
const {iniciarSesion} = require("../cuentas.js");

const botonIngresar = document.getElementById("botonIngresar");
const inputUsuario = document.getElementById("inputUsuario");
const inputContrasena = document.getElementById("inputContrasena");
const botonCrearCuenta = document.getElementById("botonCrearCuenta");
const botonCerrar = document.getElementById("botonCerrar");

botonIngresar.addEventListener("click", async () => {
    if(await iniciarSesion(inputUsuario.value,inputContrasena.value)) {
        sessionStorage.setItem("username",inputUsuario.value);
        location.href = "menu.html";
    } else {
        inputUsuario.style.borderColor = "red";
        inputContrasena.style.borderColor = "red";
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

botonCerrar.addEventListener("click", () => {
  });
