const routes = require("./routes");
const express = require("express");
const mongoose = require("mongoose"); // new
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;

// Conexion con la Base de Datos de Mongo
console.log(MONGODB_URL)
mongoose.connect(MONGODB_URL).then(() => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/tiendaMangas", routes);

  app.listen(3000, () => {
    console.log("Server has started!");
  });
});
