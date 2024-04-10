const Express = require("express");

const {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.Controller");

const productsRouter = Express.Router();

productsRouter.get("/", getProducts);
productsRouter.post("/new", createProduct);
productsRouter.get("/:id", getProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
