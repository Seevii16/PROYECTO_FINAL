const Usuario = require("../models/Usuario");

const bcrypt = require("bcrypt");

//Obtener todos los usuarios
async function getUsuario(req, res) {
  let usuarios = await Usuario.find({});

  // console.log(usuarios);
  res.send(usuarios);
  // console.log("Hola mundo");
}

async function agregarUsuario(req, res) {
  // Recoger los datos que añade el usuario
  const usuario = new Usuario({
    usuarioId: req.body.usuarioId,
    usuarioNombre: req.body.usuarioNombre,
    usuarioContra: bcrypt.hashSync(req.body.usuarioContra, 10),
    usuarioEmail: req.body.usuarioEmail,
  });
  await usuario.save();
  res.send(usuario);
  // console.log(usuario);
}

module.exports = {
  getUsuario,
  agregarUsuario,
  
};
