const mongoose = require("mongoose");

const productOrderSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
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
        enum: ["Beställd", "Plockas", "Ute för leverans", "Levererad"],
        default: "Beställd"
    }
}, {
    timestamps: true, 
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

orderSchema.virtual('totalPrice').get(function () {
    return this.products.reduce((total, product) => {
        return total + (product.quantity * product.unitPrice);
    }, 0);
});



const orderList = mongoose.model("Orders", orderSchema);

module.exports = orderList;