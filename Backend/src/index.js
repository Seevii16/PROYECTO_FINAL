
const express = require("express");
const mongoose = require("mongoose"); // new
require('dotenv').config() 
const url = process.env.MONGODB_URI


// Conexion con la Base de Datos de Mongo
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
 //S app.use("/tiendaMangas", routes);

  app.listen(3000, () => {
    console.log("Server has started!");
  });
});