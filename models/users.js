const Sequelize = require('sequelize');
const database = require('../src/database/db');


const Users = database.define('users', {
  
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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    andress: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = Users;