const express = require('express');
const router = express.Router();
const {getProducts,newProduct} = require('../controllers/product');


router.get('/Products',getProducts);
router.post('/newProduct',newProduct);


module.exports = router;