
const express = require('express');
const detalhesProdutosController = require('../controllers/detalhesProdutosController');
const detalhesProdutosRouter = express.Router();

detalhesProdutosRouter.get('/produtos/id?', detalhesProdutosController.index)

module.exports = detalhesProdutosRouter; 