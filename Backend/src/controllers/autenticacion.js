const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");

async function registrarse  (req, res){
    const {usuarioNombre, usuarioEmail, usuarioContra,usuarioApellido1,usuarioApellido2,usuarioEdad,
	usuarioPais,usuarioDireccion,usuarioTel,usuarioUserName } = req.body;
    const newUsuario = new Usuario({usuarioNombre,usuarioEmail, usuarioContra,usuarioApellido1,usuarioApellido2,usuarioEdad,
		usuarioPais,usuarioDireccion,usuarioTel,usuarioUserName});
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
 async function verificarToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Acceso Denegado');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Acceso Denegado');
	}
}
module.exports = {
  login,
  registrarse,
  
};
