const app = require("./src/app.js");
const productsRouter = require("./src/routes/product.route.js");
const { connectToMongoose } = require("./src/config/mongoose.js");
const categoriesRouter = require("./src/routes/category.route.js");
const orderRouter = require("./src/routes/order.route.js");

const port = process.env.PORT || 8080;

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/orders", orderRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToMongoose();
});
