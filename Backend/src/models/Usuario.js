const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const usuariosSchema = new Schema({
  usuarioNombre: {
    type: "String",
  },
  usuarioApellido1: {
    type: "String",
  },
  usuarioEdad: {
    type: "String",
  },
  usuarioPais: {
    type: "String",
  },
  usuarioApellido2: {
    type: "String",
  },
  usuarioDireccion: {
    type: "String",
  },
  usuarioTel: {
    type: "Number",
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
