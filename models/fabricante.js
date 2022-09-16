const Sequelize = require('sequelize');
const database = require('../src/database/db');


const Fabricante = database.define('fabricante',{
       
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = Fabricante;