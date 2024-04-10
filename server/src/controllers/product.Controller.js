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
  if (!req.params.id) {
    return res.status(400).json({
      error: "No id submitted",
    });
  }
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      throw new Error("Product not found");
    }
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
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

// Function to update product
async function updateProduct(req, res) {
  console.log("test update product by id");
  if (!req.params.id) {
    return res.status(400).json({
      error: "No id submitted",
    });
  }

  if (!req.body) {
    return res.status(400).json({
      error: "No body submitted",
    });
  }

  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate({ _id: id }, req.body);
    if (product) {
      res.status(200).json({
        message: "Product updated successfully",
        updated_product: product,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
}

// Function to delete a product
async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const result = await Product.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
