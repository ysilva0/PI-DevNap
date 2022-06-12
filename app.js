const express = require('express')
const app = express()
const path = require('path')

const mainRouter= require('./src/routes/mainRouter')
const productsRouter= require('./src/routes/productsRouter')


app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'src', 'views'))







app.use('/', mainRouter)
app.use('/products', productsRouter)



app.listen(3000, () => console.log('Aplicação rodando em http://localhost:3000'))