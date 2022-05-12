const express = require('express')
const app = express()
const path = require('path')
const mainRouter= require('../PI-DevNap/src/routes/mainRouter')
const produtosRouter= require('../PI-DevNap/src/routes/produtosRouter')



app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'src', 'views'))


app.use(express.json())



app.use('/', mainRouter)
app.use('/produtos', produtosRouter )



app.listen(3000, () => console.log('Aplicação rodando em http://localhost:3000'))