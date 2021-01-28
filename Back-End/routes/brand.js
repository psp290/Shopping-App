const express = require('express');
const {getBrand, newBrand} = require('../controllers/brand');
const router = express.Router();


router.get('/Brands',getBrand);
router.post('/newBrand',newBrand);


module.exports = router;

