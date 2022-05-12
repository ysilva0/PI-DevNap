
const produtosController = {
    index: (req, res)=>{
        res.render('produtos')
    },
    details: (req, res)=>{
        res.render('details')
    }
}

module.exports= produtosController;
