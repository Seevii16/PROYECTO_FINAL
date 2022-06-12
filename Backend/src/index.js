
const routes = require("./routes");
const express = require("express");
const mongoose = require("mongoose"); // new
const cors = require('cors')
require('dotenv').config();
const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;


// Conexion con la Base de Datos de Mongo
mongoose.connect('mongodb+srv://Admin:Admin@cluster0.mixph.mongodb.net/TiendaMangas?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use("/", routes);

  app.listen(5000, () => {
    
    console.log("Server has started!");
  });
});