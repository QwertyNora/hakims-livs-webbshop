const Express = require("express");

const {
    addProductToInventory,
    updateProductInInventory,
    deleteProductByAdmin
} = require("../controllers/adminProducts.controller");

const adminProductRouter = Express.Router();

adminProductRouter.post("/", addProductToInventory);
adminProductRouter.put("/:id", updateProductInInventory);
adminProductRouter.delete("/admin/delete", deleteProductByAdmin);

module.exports = adminProductRouter;