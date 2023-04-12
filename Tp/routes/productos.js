const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productosControllers')

router.get('/', productosController.index)
router.get ('/detalle/:id', productosController.detalle)

module.exports = router