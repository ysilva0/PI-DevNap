(async () => {

const database = require('./db');
const Products = require('../../models/products');
const Fabricante = require('../../models/fabricante');
const Users = require('../../models/users');
await database.sync({force: true});

//const newFabricante = await Fabricante.create({
//    nome: 'Fabri1'
//})

//const newProducts = await Products.create({
//     nome: '',
//     description: '',
//    prince: '',
//     category: '',
//     idFabricante: newFabricante.id
//})
// const newProducts = await Products.creat({
    // name: "",
    // price:"",
    // description: "",
    // category: ""
// })
//const newUsers = await User.create({
//     nome: '',
//     email: '',
//     password: ''
//})

// const products = await Products.findAll();
// const products = await Products.findByPk();
// await products.destroy();


})();