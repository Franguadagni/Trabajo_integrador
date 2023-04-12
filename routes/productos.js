const express = require("express")
const router = express.Router()
const productosController = require("../controllers/productosControllers")

router.get("/detalle/:id", productosController.detalle)
router.get("/busqueda/:id", productosController.busqueda)
router.get("/product-add", productosController.agregados)

module.exports = router;