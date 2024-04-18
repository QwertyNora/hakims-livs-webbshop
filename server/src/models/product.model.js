const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 0 },
  brand: { type: String, required: false, default: "unknown" },
  imageURL: { type: String, required: true },
  weight: { type: Number, required: true },
  description: { type: String, required: true },
  unitType: { type: String, required: true, enum: ['st', 'kilo', 'liter', 'gram'] } ,
  comparisonPrice: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
