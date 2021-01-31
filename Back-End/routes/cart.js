const express = require('express');
const { addItemToCart, getCartDetails, updateItemQuantity, removeItem } = require('../controllers/cart');

const router = express.Router();


router.post('/addItemToCart',addItemToCart);
router.get('/getCartDetails',getCartDetails);
router.put('/updateItemQuantity',updateItemQuantity);
router.put('/removeFromCart',removeItem);

module.exports = router;