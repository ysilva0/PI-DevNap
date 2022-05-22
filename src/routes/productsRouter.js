
const express = require('express');
const productsController = require('../controllers/ProductsController')
const productsRouter = express.Router();

productsRouter.get('/', ProductsController.index)
productsRouter.get('/details/:id', ProductsController.details)
productsRouter.get('/edit/:id', ProductsController.edit)
productsRouter.delete('/delete/:id', ProductsController.delete);
productsRouter.put('/edit/:id', ProductsController.update);
productsRouter.get("/create", ProductsController.create)
productsRouter.post('/', ProductsController.save)



module.exports = productsRouter; 