const productController = require('../controllers/productController')

const router  = require('express').Router()


router.post('/addProduct', productController.addProduct)

router.get('/allProduct', productController.getAllProduct)

router.get('/published', productController.publishedProduct)

router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)


module.exports = router;