const ProductsController = {
  index: (req, res) => {
    res.render("products");
  },

  details: (req, res) => {
        res.render("details");
  },

  delete: (req, res) => {cts.filter(
    res.redirect("/products"));
  },

  edit: (req, res) => {
    res.render("product-edit-form", { productToEdit });
  },

  update: (req, res) => {
    res.redirect("/products");
  },

  create: (req, res) => {
    res.render("product-create-form");
  },

  save: (req, res) => {
   res.redirect("/products");
  },
};

module.exports= ProductsController;
