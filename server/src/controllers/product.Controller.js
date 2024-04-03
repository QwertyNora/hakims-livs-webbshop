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
  // try {
  //   const _product = req.body;
  //   const product = await Product.create(_product);
  //   res.status(201).json(product);
  // } catch (error) {
  //   res.status(404).json({
  //     message: error.message,
  //   });
  // }
}

module.exports = {
  getProducts,
  createProduct,
};
