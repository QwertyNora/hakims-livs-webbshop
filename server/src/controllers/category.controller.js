const Category = require("../models/category.model");

async function getCategories(req, res) {
  try {
    const categories = await Category.find();

    // Check if the categories array is empty
    if (categories.length === 0) {
      // Optionally, you can still return a 200 status with an empty array
      return res.status(200).json({
        message: "No categories found",
        categories: [] // Explicitly return an empty array
      });
    }

    // If categories are found, send them back with a 200 status
    res.status(200).json(categories);
  } catch (error) {
    console.error(error.message); // Fixed to use the correct error variable
    res.status(500).json({ message: "Error with get request.", error: error.message });
  }
}

module.exports = {
  getCategories
};
