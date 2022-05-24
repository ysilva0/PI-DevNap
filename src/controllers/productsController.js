
const ProductsController = {
    index: (req, res)=>{
        res.render('products')
    },
    details: (req, res)=>{
        res.render('details')
    }
}

module.exports= ProductsController;
