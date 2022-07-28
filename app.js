const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser')
const mainRouter= require('./src/routes/mainRouter')
const productsRouter= require('./src/routes/productsRouter')
const usersRouter = require('./src/routes/userRoutes')
const logMiddleware = require('./src/middleware/log')
const cookieMiddleware = require("./src/middleware/cookie");



app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: "super-secret",
        resave: true,
        saveUninitialized: true
    })
)
app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'src', 'views'))


app.use(methodOverride('_method'))
app.use(logMiddleware)
app.use(cookieMiddleware)



app.use('/account', usersRouter)
app.use('/', mainRouter)
app.use('/products', productsRouter)



app.listen(3000, () => console.log('Aplicação rodando em http://localhost:3000'))