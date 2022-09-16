const Sequelize = require('sequelize');
const Products = require('./products');
const database = require('../src/database/db');


const Carrinho = require('carrinho' ,{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },

})


 Products.hasMany(Carrinho, {
   foreignKey: 'idProducts'
 })



 const total = Carrinho.reduce((soma, item) => item.prince + soma,0);



module.exports = Carrinho;