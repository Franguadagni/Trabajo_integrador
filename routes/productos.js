const express = require("express")
const router = express.Router()
const productosController = require("../controllers/productosControllers")

router.get("/detalle/:id", productosController.detalle)
router.get("/busqueda", productosController.busqueda)
router.get("/product-add", productosController.agregados)
router.post('/product-add', productosController.create)
router.get('/product-edit', productosController.productEdit)
router.post('/product-edit',productosController.update)
router.post('/product-delete',productosController.delete)
module.exports = router;