//TODO: Category route
const Express = require("express");

const {
  getCategories
} = require("../controllers/category.controller");

const categoriesRouter = Express.Router();

categoriesRouter.get("/categories", getCategories);

module.exports = categoriesRouter;