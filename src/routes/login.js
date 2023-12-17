const express = require('express');
const LoginController = require('../controllers/loginControllers');

const router = express.Router();

router.get('/login', LoginController.login);
router.get('/register', LoginController.register);

module.exports = router;