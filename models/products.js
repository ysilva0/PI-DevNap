const Sequelize = require('sequelize');
const database = require('../src/database/db');
const Fabricante = require('./fabricante');



const Products = database.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      primaryKey: true
  },
   // price: Sequelize.DECIMAL,
    description: Sequelize.STRING,
    category: Sequelize.STRING
    
   
})
  
  Products.belongsTo(Fabricante, {
     constraint: true,
     foreignKey: 'idFabricante'
  } )

 // Fabricante.hasMany(Products, {
 //   foreignKey: 'idFabricante'
 //  })
 

 module.exports = Products;
