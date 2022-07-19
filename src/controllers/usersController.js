const getInfoDatabase = require('../utils/getInfoDatabase')
const bcrypt = require('bcrypt')
const { v4 } = require('uuid')
const path = require('path')
const fs = require('fs')


const users = getInfoDatabase('users')
const pathUsersJSON = path.join(__dirname, "..", "database", "users.json")

const usersController = {
    showLoginPage: (req, res) => {
        res.render('login')
    },

    login: (req, res) => {
        const { email, password, remember } = req.body;
        const toRemember = Boolean(remember)
        const userExists = users.find((user) => {
            return user.email === email && bcrypt.compareSync(password, user.password);
        });

        if(!userExists)
        return res.send('Email ou senha está incorreto.')

        req.session.user = userExists

        if (toRemember) {
            res.cookie('remember', userExists.email, { maxAge: 1000000 })
        }

        return res.redirect('products')
    },

    showCreateUserPage: (req, res) => {
        res.send('user-create-form')
    },

    create: (req, res) => {
        const { name, email, password } = req.body

        const newId = v4()

        const hashedPassword = bcrypt.hashSync(password, 12)

        const newUserCreated = {
            id: newId,
            name,
            email,
            password: hashedPassword
        }
        users.push(newUserCreated)

        const usersJSON = JSON.stringify(users, null, " ")

        fs.writeFileSync(pathUsersJSON, usersJSON);
        res.redirect('/')
    }
}

module.exports = UsersController