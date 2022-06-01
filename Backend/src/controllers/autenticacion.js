const Usuario = require("../models/Usuario");
const Rol = require("../models/Rol");
const jwt = require("jsonwebtoken");

async function registrarse  (req, res){
    const { usuarioEmail, usuarioContra } = req.body;
    const newUsuario = new Usuario({usuarioEmail, usuarioContra});
    await newUsuario.save();
		const token = await jwt.sign({_id: newUsuario._id}, 'secretkey');
    res.status(200).json({token});
}

 async function login (req, res){
  const { usuarioEmail, usuarioContra } = req.body;

  const usuario = await Usuario.findOne({usuarioEmail});
  if (!usuario) return res.status(401).send('El email no existe');
  if (usuario.usuarioContra !== usuarioContra) return res.status(401).send('Contraseña Incorrecta');

  const token = jwt.sign({_id: usuario._id}, 'secretkey');

  return res.status(200).json({token});
 }
module.exports = {
  login,
  registrarse,
  
};
