const Express = require("express");

const {
  getProducts,
  createProduct,
  getProduct,
} = require("../controllers/product.Controller");

const productsRouter = Express.Router();

productsRouter.get("/", getProducts);
productsRouter.post("/new", createProduct);
productsRouter.get("/:id", getProduct);

module.exports = productsRouter;
