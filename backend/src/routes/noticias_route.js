"use strict";

const express = require("express");
const noticiasController = require("../controllers/noticias_controller");
const router = express.Router();

router.get('/:id', noticiasController);

module.exports = router;