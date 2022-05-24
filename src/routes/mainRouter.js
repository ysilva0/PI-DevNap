
const express = require('express');
const MainController = require('../controllers/MainController')
const mainRouter = express.Router();

mainRouter.get('/', MainController.index)

module.exports = mainRouter; 