const express = require('express');

const { createUser, userLogin, getUserInfo, deactivateUser, activateUser } = require('../controllers/user');

const router = express.Router();

router.post('/newUser',createUser);
router.post('/login',userLogin);
router.get('/userInfo',getUserInfo);
router.put('/deactivate',deactivateUser);
router.put('/activate',activateUser);


module.exports = router;



