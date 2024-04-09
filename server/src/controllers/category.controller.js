const mongoose = require("mongoose");

async function getCategories(req, res) {
  try {
    const categories = await categories.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        message: "Category not found",
      });
    }
  } catch (error) {
    onsole.log(err.message);
    res
      .status(500)
      .json({ message: "Error with get request.", error: err.message });
  }
}

module.exports = {
  getCategories
}