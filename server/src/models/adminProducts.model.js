const mongoose = require("mongoose");

const adminProductSchema = new mongoose.Schema({
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
})

const adminProduct = mongoose.model("product", adminProductSchema);

module.exports = adminProduct;