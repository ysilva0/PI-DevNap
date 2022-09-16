const Sequelize =  require('sequelize');
const sequelize = new Sequelize('datab' , 'root', 'joaovitor', {
    dialect: "mysql",
    host: "localhost",
    port: 3306
})

module.exports = sequelize;