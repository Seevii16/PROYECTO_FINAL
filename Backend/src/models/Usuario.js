const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
  },
  roles : [
    {
    ref:"Rol",
    type: Schema.Types.ObjectId
  },
]

});
usuariosSchema.statics.encryptUsuarioContra = async (usuarioContra) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(usuarioContra, salt);
};

usuariosSchema.statics.compareUsuarioContra = async (usuarioContra, contrasniaRecivida) => {
  return await bcrypt.compare(usuarioContra, contrasniaRecivida)
}
let usuario = mongoose.model("Usuario", usuariosSchema);

module.exports = usuario;
