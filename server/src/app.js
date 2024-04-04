//TODO App
const Express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/product.route");

const uri = process.env.MONGODB_CONNECT_URI;
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// TODO: Add our origin
app.use(
  cors({
    origin: ["http://localhost:3000", uri],
  })
);

// TODO: Try TEST get req to our database
app.get("/", (req, res) => {
  res.json({
    message: "Products API",
    p: process.env.MONGODB_CONNECT_URI,
  });
});

// TODO: ADD OUR ROUTES.
app.use("/products", productsRouter);

module.exports = app;
