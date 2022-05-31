const express = require("express");

const {
  getUsuario,
  agregarUsuario,
} = require("../controllers/usuarios");

const router = express.Router();



router.post("/", agregarUsuario);
router.get("/", getUsuario);

module.exports = router;
