const app = require("./src/app.js");
const productsRouter = require("./src/routes/product.route.js");

// const dotenv = require("dotenv").config();

const { connectToMongoose } = require("./src/config/mongoose.js");

// const port = process.env.PORT || 8080;

app.use("/products", productsRouter);

app.listen(3001, () => {
  console.log("Server running on ", 3001);
  connectToMongoose();
});
