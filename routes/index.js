var express = require("express");
var router = express.Router();
const controlador = require('../controllers/indexControllers')

/* GET home page. */
router.get("/", controlador.index)
router.post('/',controlador.logout)

module.exports = router;
