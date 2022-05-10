const path = require ('path')

const detalhesProdutosController = {
    index: (req, res)=>{
        res.sendFile(path.join(__dirname, '../views/detalhesProdutos.html'))
    }
}

module.exports= detalhesProdutosController;
