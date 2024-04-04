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
  }
}

// Function to get specific product
async function getProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (error) {
    onsole.log(err.message);
    res
      .status(500)
      .json({ message: "Error with get request.", error: err.message });
  }
}

// Function to create a product
async function createProduct(req, res) {
  console.log("test");
  if (!req.body) {
    return res.status(400).json({
      error: "No body submitted",
    });
  }
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ message: "Error with post request.", error: err.message });
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProduct,
};
