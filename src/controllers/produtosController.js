const path = require ('path')

const produtosController = {
    index: (req, res)=>{
        res.sendFile(path.join(__dirname, '../views/categoria.html'))
    }
}

module.exports= produtosController;
