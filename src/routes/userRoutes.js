const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router();

router.get('/', usersController.index)
router.get('/login', usersController.showLoginPage)
router.post('/login', usersController.login)
router.get('/register', usersController.showCreateUserPage)
router.post('/register', usersController.create)

module.exports = router