const express = require("express");

import * as mangasController from '../controllers/mangas'

const router = express.Router();

router.get("/", mangasController.getManga);

router.post("/", mangasController.agregarManga);

router.delete("/",mangasController.eliminarManga)

router.get("/",mangasController.buscarPorDemografia)

module.exports = router;
