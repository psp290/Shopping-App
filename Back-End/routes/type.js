const express = require('express');
const { newType, getType } = require('../controllers/type');

const router = express.Router();

router.get('/Types',getType);
router.post('/newType',newType);


module.exports = router;