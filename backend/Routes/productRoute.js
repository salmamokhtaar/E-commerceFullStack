const express = require('express');

const router = express.Router();

const productController = require('../Controllers/productController')

const imageUpload = require('../MiddleWare/imageUpload')

// params route ka ayu so raca
router.post('/product/register', imageUpload.single("image"), productController.registerProduct)
router.get('/product/read', productController.getProduct)
router.get('/product/single/:id',productController.getSingleData)

module.exports = router