const express = require("express")
const router = express.Router()
const productosController = require("../controllers/productosControllers")

router.get("/detalle/:id", productosController.detalle)
router.get("/busqueda", productosController.busqueda)

router.get("/product-add", productosController.agregados)
router.post('/product-add', productosController.create)

router.get('/product-edit/:id', productosController.productEdit)
router.post('/product-edit/:id',productosController.update)

router.post('/product-delete/:id',productosController.delete)

// router.get("/comment-add", productosController.comment_add)
router.post("/comment-add", productosController.crearComment)

module.exports = router;