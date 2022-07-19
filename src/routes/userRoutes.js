const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router();

router.get('/', usersController.showLoginPage)
router.post('/', usersController.login)
router.get('/user', usersController.showCreateUserPage)
router.post('/user', usersController.create)

module.exports = usersRouter