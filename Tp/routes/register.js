const express = require('express')
const router = express.Router()
const registerController = require('../controllers/registercontrollers')

router.get ('/registro', registerController.register)

module.exports = router