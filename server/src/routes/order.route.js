const express = require("express");

const {
    createOrder,
    getAllOrders,
    updateOrderStatus,
    getPickingList
} = require("../controllers/order.controller");

const orderRouter = express.Router();

//Below follows the set routers for order handle.
orderRouter.post("/create", createOrder);
orderRouter.get("/", getAllOrders);
orderRouter.put("/:id/status", updateOrderStatus);
orderRouter.get("/:id/picking-list", getPickingList);


module.exports = orderRouter;