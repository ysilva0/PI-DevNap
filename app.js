const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.listen(3000, () => console.log('Aplicação rodando em http://localhost:3000'))