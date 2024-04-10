//TODO: Category route
const Express = require("express");

const {
  getCategories
} = require("../controllers/category.controller");

const categoriesRouter = Express.Router();

categoriesRouter.get("/", getCategories);

module.exports = categoriesRouter;