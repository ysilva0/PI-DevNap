
const express = require('express');
const productsController = require('../controllers/produtosController')
const productsRouter = express.Router();

productsRouter.get('/', productsController.index)
productsRouter.get('/details/:id', productsController.details)
productsRouter.get('/edit/:id', productsController.edit)
productsRouter.delete('/delete/:id', productsController.delete);
productsRouter.put('/details/:id', productsController.details)



module.exports = productsRouter; 