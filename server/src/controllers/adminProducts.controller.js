const adminProduct = require("../models/adminProducts.model");
const { adminProductErrorHandler } = require("../utils/apiHelpers");

//Function to add new products to inventory
async function addProductToInventory(req, res) {
  if (!req.body) {
    return res.status(400).json({
      error: "No body submitted",
    });
  }
  try {
    const product = new adminProduct(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("Error with post request", error);
    res.status(500).json({
      message: "Error with post request",
      error: error.message,
    });
  }
}

// Funktion för att uppdatera en produkt i inventariet
async function updateProductInInventory(req, res) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await adminProduct.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ message: "Product not found with id: " + id });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product", error);
    res
      .status(500)
      .json({ message: "Error updating product", error: error.toString() });
  }
}

//Function to delete products in inventory
async function deleteProductByAdmin(req, res) {
  const { id } = req.params;
  try {
    const product = await product.findByIdAndDelete(id);
    if (!product) {
      throw new Error("Cast to objId");
    }
    res.status(204).json();
  } catch (error) {
    console.log("Error deleteing product");
  }
}

module.exports = {
  addProductToInventory,
  updateProductInInventory,
  deleteProductByAdmin,
};
