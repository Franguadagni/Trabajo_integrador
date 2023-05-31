var express = require("express");
const { profileEdit } = require("../controllers/usersControllers");
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')
/* GET users listing. */
router.get("/login", usersControllers.login)

router.get ('/registro', usersControllers.register)
router.get('/registro', usersControllers.create)

router.get ('/profile', usersControllers.profile)
router.get("/profileEdit",  usersControllers.profileEdit)

module.exports = router;
