const botonIngresar = document.getElementById("botonIngresar");
const inputUsuario = document.getElementById("inputUsuario");
const inputContrasena = document.getElementById("inputContrasena");
const botonCrearCuenta = document.getElementById("botonCrearCuenta");

botonIngresar.addEventListener("click", () => {
    // Obtiene la fecha actual
    if(inputUsuario.value=="Meza" && inputContrasena.value=="1234") {
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