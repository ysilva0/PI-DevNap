const getInfoDatabase = require('../utils/getInfoDatabase')
const bcrypt = require('bcrypt')
const { v4 } = require('uuid')
const path = require('path')
const formatPrice = require("../utils/formatPrice");
const fs = require('fs')

const { Users } = require('../../models')


const users = getInfoDatabase('users')
const products = getInfoDatabase("products");
const pathUsersJSON = path.join(__dirname, "..", "database", "users.json")

const usersController = {

    index: async (req, res) => {
        try {
            const users = await Users.findAll()
            const usersMapped = users.map( user => user.dataValues)
            return res.json(usersMapped)
        } catch (error) {
            return res.json( { error: error.message })
        }

    // index: (req, res) =>{
    //     Users.findAll()
    //         .then(result => {
    //             const arrayMapped = result.map(user => user.dataValues)
    //             return res.json(arrayMapped)
    //         })
    //         .catch(error => console.log(error))

        const userSession = req.user

        res.render('user', {
            userSession
        })
    },

    showLoginPage: (req, res) => {
        res.render('login')
    },

    cart: (req, res) => {
        const { id } = req.params;
        const productFound = products.find((product) => {
            return product.id === Number(id);
    });

        const userSession = req.user

        res.render('shoppingCart', {
            productFound,
            formatPrice,
            userSession
        })
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

        return res.redirect('/')
    },

    showCreateUserPage: (req, res) => {
        res.render('user-create-form')
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

module.exports = usersController