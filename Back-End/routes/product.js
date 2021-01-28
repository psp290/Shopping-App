const express = require('express');
const router = express.Router();
const {getProducts,newProduct, updateProduct, deleteStock, removeProduct} = require('../controllers/product');


router.get('/Products',getProducts);
router.post('/newProduct',newProduct);

router.put('/updateProduct',updateProduct);
router.put('/deleteStock',deleteStock);
router.delete('/deleteProduct',removeProduct);


module.exports = router;