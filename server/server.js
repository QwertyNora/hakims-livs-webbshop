const app = require("./src/app.js");
const productsRouter = require("./src/routes/product.route.js");
const { connectToMongoose } = require("./src/config/mongoose.js");

// const port = process.env.PORT || 8080;

app.use("/products", productsRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToMongoose();
});

