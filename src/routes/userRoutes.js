const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router();
const auth = require('../middleware/auth')

router.get('/', auth, usersController.index)
router.get('/login', usersController.showLoginPage)
router.post('/login', usersController.login)

router.get('/register', usersController.showCreateUserPage)
router.post('/register', usersController.createNewUser)
router.get('/cart', auth, usersController.cart)

module.exports = router