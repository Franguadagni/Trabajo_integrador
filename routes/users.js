var express = require("express");
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')
/* GET users listing. */
router.get("/login", usersControllers.login)
router.get ('/registro', usersControllers.register)

module.exports = router;
