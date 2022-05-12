
const express = require('express');
const detailsController = require('../controllers/detailsController');
const detailsRouter = express.Router();

detailsRouter.get('/produtos/:id?', detailsController.index)

module.exports = detailsRouter; 