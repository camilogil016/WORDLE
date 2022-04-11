// Librerías
const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let ventanaPrincipal;

// Evento "ready" de la aplicación
app.on("ready", () => {
  // Creación de la ventana principal
  ventanaPrincipal = new BrowserWindow({
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
  });
  // Carga del archivo index.html en la ventana
  ventanaPrincipal.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/inicio.html"),
      protocol: "file",
      slashes: true,
    })
  );
  ventanaPrincipal.maximize();
});