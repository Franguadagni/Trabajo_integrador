var express = require("express");
var router = express.Router();
const controlador = require('../controllers/indexControllers')

/* GET home page. */
router.get("/", controlador.index)

module.exports = router;
