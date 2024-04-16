const Order = require("../models/order.model");

//This controller is made for functions for order handler. Create, get all, picklist, update status, delete.

//function for new order:
async function createOrder(req, res) {
    if (!req.body || !req.body.products || !req.body.customer) {
        return res.status(400).json({
            error: "Order not created due to missing product or customer details",
        });
    }
    const { name, email, phoneNumber, address, invoiceAddress } = req.body.customer;
    if (!name || !email || !phoneNumber || !address || !invoiceAddress) {
        return res.status(400).json({
            error: "Missing required customer details",
        });
    }
    try {
        const newOrder = new Order({
            products: req.body.products,
            customer: {
                name,
                email,
                phoneNumber,
                address,
                invoiceAddress
            }
        });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.error("Error with post request", error);
        res.status(500).json({
            message: "Error creating order",
            error: error.message,
        });
    }
};


//Function for getting all orders in system
async function getAllOrders(req, res) {
    try {
        const orders = await Order.find(); 
        res.status(200).json(orders); 
    } catch (error) {
        console.error("Error retrieving orders", error);
        res.status(500).json({
            message: "Error retrieving orders",
            error: error.message,
        });
    }
};


//Function to update status on order ("Ordered", "In progress", "Out for delivery", "Delivered")
async function updateOrderStatus(req, res) {
    const orderId = req.params.id;  
    const newStatus = req.body.status;  
    if (!orderId || !newStatus) {
        return res.status(400).json({
            error: "Missing orderId or newStatus in request",
        });
    }
    try {
        const order = await Order.findByIdAndUpdate(
            orderId,
            { status: newStatus },
            { new: true }
        );
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Error updating order status", error: error.message });
    }
};


//Function for get pick-list
async function getPickingList(req, res) {
    const orderId = req.params.id;

    try {
        const order = await Order.findById(orderId).populate('products.productId');
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        const productList = order.products.map(product => ({
            name: product.productId.title, 
            quantity: product.quantity
        }));
        res.status(200).json(productList);  
    } catch (error) {
        res.status(500).json({ message: "Error retrieving products", error: error.message });
    }
};


//Function to delete a order.
async function deleteOrder(req, res) {
    const orderId = req.params.id;
    try {
        const order = await Order.findByIdAndDelete(orderId);
        if(!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }
        res.status(200).json({
            message: "Order successfully deleted"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting order", error: error.message
        })
    }
};


module.exports = {
    createOrder,
    getAllOrders,
    updateOrderStatus,
    getPickingList,
    deleteOrder,

};