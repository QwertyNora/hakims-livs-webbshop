const Product = require("../models/product.model");

// Function to get all products from DB
async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
    // console.log("Could not find products");
  }
}

async function createProduct(req, res) {
  try {
    const _product = req.body;
    const product = await Product.create(_product);
    res.status(201).json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
}

module.exports = {
  getProducts,
  createProduct,
};
