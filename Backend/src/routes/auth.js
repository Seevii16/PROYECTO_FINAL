const express = require("express");

const {
  registrarse,
  login,
} = require("../controllers/autenticacion");

const router = express.Router();



router.post("/", registrarse);
router.post("/", login);

module.exports = router;