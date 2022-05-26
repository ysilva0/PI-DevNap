
const express = require('express');
const ProductsController = require('../controllers/ProductsController')

const productsRouter = express.Router();

productsRouter.get("/", ProductsController.index);
productsRouter.get("/detail/:id", ProductsController.details);
productsRouter.delete("/delete/:id", ProductsController.delete);
productsRouter.get("/edit/:id", ProductsController.edit);
productsRouter.put("/edit/:id", ProductsController.update);
productsRouter.get("/create", ProductsController.create);
productsRouter.post("/", ProductsController.save);





module.exports = productsRouter; 