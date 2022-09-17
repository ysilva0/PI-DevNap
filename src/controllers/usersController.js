const getInfoDatabase = require('../utils/getInfoDatabase')
const bcrypt = require('bcrypt')
const { v4 } = require('uuid')
const path = require('path')
const formatPrice = require("../utils/formatPrice");
const fs = require('fs')
const { User } = require('../models')
const users = getInfoDatabase('users')
const products = getInfoDatabase("products");
const pathUsersJSON = path.join(__dirname, "..", "database", "users.json")
const usersController = {

    index: (req, res) => {
        // try {
        //     const users = await Users.findAll()
        //     const usersMapped = users.map( user => user.dataValues)
        //     return res.json(usersMapped)
        // } catch (error) {
        //     return res.json( { error: error.message })
        // }

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
        const { email, password } = req.body;

        database.Users.findOne({
          where: {
            email,
          },
        }).then(user => {
    
          if (!user) {
            alert('User does not exist');
            res.redirect('/login');
          }
    
          if (bcrypt.compareSync(password, user.password)) {
            res.cookie('user', JSON.stringify({ id: user.id, name: user.name, type: user.type }));
    
            res.redirect('/');
          }
    
          res.render('/login');
        }).catch(error => console.log(error));
    },

    showCreateUserPage: (req, res) => {
        res.render('user-create-form')
    },

    createNewUser: (req, res) => {
        const { name, email, password } = req.body

        const hashedPassword = bcrypt.hashSync(password, 12)

        User.create({
            name,
            email,
            password: hashedPassword
        }).then(() => {
            res.redirect('/login');
        }).catch(() => {
            error => (res.send(error))
        })

        // const newUserCreated = {
        //     id: newId,
        //     name,
        //     email,
        //     password: hashedPassword
        // }
        // users.push(newUserCreated)

        const usersJSON = JSON.stringify(users, null, " ")

        fs.writeFileSync(pathUsersJSON, usersJSON);
        res.redirect('/')
    }
}

module.exports = usersController