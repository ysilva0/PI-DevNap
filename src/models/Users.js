const { allow } = require("joi")

module.exports = (sequelize, DataTypes) => {
    const alias = 'Users'
    const collumns = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(1000),
            allowNull: false
        }
    }
    const config = {
        tableName: 'users',
    }
    const User = sequelize.define(alias, collumns, config);
    
    return User
}