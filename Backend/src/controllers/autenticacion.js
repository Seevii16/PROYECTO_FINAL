const Usuario = require("../models/Usuario");
const Rol = require("../models/Rol");
const jwt = require("jsonwebtoken");

async function registrarse  (req, res){
  try {
    // Getting the Request Body
    const {  usuarioNombre, usuarioEmail, usuarioContra, roles } = req.body;
    // Creating a new Usuario Object
    const newUsuario = new Usuario({
      usuarioNombre,
      usuarioEmail,
      usuarioContra: await Usuario.encryptUsuarioContra(usuarioContra),
    });

    // checking for roles
    if (req.body.roles) {
      const foundRoles = await Rol.find({ name: { $in: roles } });
      newUsuario.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "usuarioUsuario" });
      newUsez.roles = [role._id];
    }

    // Saving the Usuario Object in Mongodb
    const savedUsuario = await newUsuario.save();

    // Create a token
    const token = jwt.sign({ id: savedUsuario._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

 async function login (req, res){
  try {
    // Request body usuarioEmail can be an usuarioEmail or  usuarioNombre
    const usuarioUsuarioFound = await Usuario.findOne({ usuarioEmail: req.body.usuarioEmail }).populate(
      "roles"
    );

    if (!usuarioUsuarioFound) return res.status(400).json({ message: "Usuario Not Found" });

    const matchUsuarioContra = await Usuario.compareUsuarioContra(
      req.body.usuarioContra,
      usuarioUsuarioFound.usuarioContra
    );

    if (!matchUsuarioContra)
      return res.status(401).json({
        token: null,
        message: "Invalid UsuarioContra",
      });

    const token = jwt.sign({ id: usuarioUsuarioFound._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  login,
  registrarse,
  
};
