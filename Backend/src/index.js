
const routes = require("./routes");
const express = require("express");
const mongoose = require("mongoose"); // new
require('dotenv').config() 
const url = process.env.MONGODB_URI
const PORT = process.env.PORT


// Conexion con la Base de Datos de Mongo
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use("/", routes);

  app.listen(PORT, () => {
    
    console.log("Server has started!");
  });
});