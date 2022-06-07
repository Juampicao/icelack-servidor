const express = require("express");
const conectarDB = require("./config/db");

// Crear Servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Puerto de la app
const port = process.env.PORT || 4001;

// Rutas de la app
app.use(`/api/usuarios`, require(`./routes/usuarios`));

// Arrancar la app
app.listen(port, `0.0.0.0`, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
