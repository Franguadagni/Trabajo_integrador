var express = require("express");
const { profileEdit } = require("../controllers/usersControllers");
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')
/* GET users listing. */
router.get("/login", usersControllers.login)
router.post('/login', usersControllers.checkUser)

router.get ('/registro', usersControllers.register)
router.post('/registro', usersControllers.create)

router.get ('/profile', usersControllers.profile)

router.get("/profileEdit",  usersControllers.profileEdit)
router.post('/profileEdit', usersControllers.update)

module.exports = router;
