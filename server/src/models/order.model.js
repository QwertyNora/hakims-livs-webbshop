const mongoose = require("mongoose");



const productOrderSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    unitPrice: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    products: [productOrderSchema],
    status: {
        type: String,
        enum: ["Ordered", "In progress", "Out for delivery", "Delivered"],
        default: "Ordered"
    },
    customer: {  
        name: { type: String, required: true },
        email: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        address: { type: String, required: true },
        invoiceAddress: { type: String, required: true }
    }
}, {
    timestamps: true, 
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true }
});

orderSchema.virtual('totalPrice').get(function () {
    return this.products.reduce((total, product) => total + (product.quantity * product.unitPrice), 0);
});

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;

