const express = require('express')
const app = express()
const path = require('path')
const mainRouter= require('../PI-DevNap/src/routes/mainRouter')
const produtosRouter= require('../PI-DevNap/src/routes/produtosRouter')
const detalhesProdutosRouter = require('../PI-DevNap/src/routes/detalhesProdutosRouter')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())


app.use('/', mainRouter)
app.use('/', produtosRouter )
app.use('/', detalhesProdutosRouter)


app.listen(3000, () => console.log('Aplicação rodando em http://localhost:3000'))