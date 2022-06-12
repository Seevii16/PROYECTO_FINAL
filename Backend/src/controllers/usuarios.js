const Usuario = require("../models/Usuario");

const bcrypt = require("bcrypt");

//Obtener todos los usuarios
async function getUsuario(req, res){
  const { id } = req.params;
  try {
    const usuario = await Usuario.findById(id);
    return res.json(usuario);
    
  } catch (error) {
    console.log(error)
  }
}

async function agregarUsuario(req, res) {
  // Recoger los datos que añade el usuario
  const usuario = new Usuario({
    usuarioNombre: req.body.usuarioNombre,
    usuarioApellido1:req.body.usuarioApellido1,
    usuarioApellido2:req.body.usuarioApellido2,
    usuarioDireccion:req.body.usuarioDireccion,
    usuarioEdad:req.body.usuarioEdad,
    usuarioPais:req.body.usuarioPais,
    usuarioTel:req.body.usuarioTel,
    usuarioContra: bcrypt.hashSync(req.body.usuarioContra, 10),
    usuarioEmail: req.body.usuarioEmail,
    fotoperfilPath : req.file.path,
  });
  await usuario.save();
  res.send(usuario);
  // console.log(usuario);
}

module.exports = {
  getUsuario,
  agregarUsuario,
  
};
