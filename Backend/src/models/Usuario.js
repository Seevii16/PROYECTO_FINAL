const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const usuariosSchema = new Schema({
  usuarioNombre: {
    type: "String",
  },
  usuarioContra: {
    type: "String",
    required : true
  },
  usuarioEmail: {
    type: "String",
    unique: true
  }



});

let usuario = mongoose.model("Usuario", usuariosSchema,'usuarios');

module.exports = usuario;
