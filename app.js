const express = require('express')
const app = express()
const path = require('path')
const mainRouter= require('../PI-DevNap/src/routes/mainRouter')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())


app.use('/', mainRouter)

app.listen(3000, () => console.log('Aplicação rodando em http://localhost:3000'))