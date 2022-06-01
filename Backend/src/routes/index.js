const express = require("express");

const { getManga, agregarManga, eliminarManga, buscarPorDemografia } = require("../controllers/mangas");
const { getPago, agregarPago } = require("../controllers/pagos");
const {login,registrarse} = require("../controllers/autenticacion");

const router = express.Router();
router.get("/",(req,res) =>{
  res.send("HolaMundo!")
});
router.get("/mangas", getManga);
router.get("/mangas/demografia", buscarPorDemografia);
router.post("/agregarManga", agregarManga);
router.delete("/eliminarManga",eliminarManga);

router.get("/pagos", getPago);
router.post("/agregarPago", agregarPago);


router.post("/registrarse", registrarse);
router.post("/login", login);

module.exports = router;
