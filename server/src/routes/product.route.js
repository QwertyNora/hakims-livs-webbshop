const Express = require("express");

const {
  getProducts,
  createProduct,
} = require("../controllers/product.Controller");

const productsRouter = Express.Router();

productsRouter.get("/", getProducts);
productsRouter.post("/new", createProduct);

module.exports = productsRouter;
