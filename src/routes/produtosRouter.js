
const express = require('express');
const produtosController = require('../controllers/produtosController')
const produtosRouter = express.Router();

produtosRouter.get('/', produtosController.index)
produtosRouter.get('/details/:id', produtosController.details)

module.exports = produtosRouter; 