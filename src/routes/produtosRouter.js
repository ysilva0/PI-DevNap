
const express = require('express');
const produtosController = require('../controllers/produtosController')
const produtosRouter = express.Router();

produtosRouter.get('/produtos', produtosController.index)

module.exports = produtosRouter; 