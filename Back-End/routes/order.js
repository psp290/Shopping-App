const express = require('express');
const { placeOrder, getOrderById, orderPacked, orderShipped, orderDelivered } = require('../controllers/order');

const router = express.Router();


router.post('/orderPlaced',placeOrder);
router.get('/getOrderById',getOrderById);
router.get('/getAllOrders');



// admin use

router.put('/orderPacked',orderPacked);
router.put('/orderShipped',orderShipped);
router.put('/orderDelivered',orderDelivered);




module.exports = router;