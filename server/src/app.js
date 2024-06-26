//TODO App
const Express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/product.route");
const adminProductRouter = require("./routes/adminProducts.route");
const categoriesRouter = require("./routes/category.route");
const orderRouter = require("./routes/order.route");
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// TODO: Add our origin
app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "*"],
//   })
// );

// TODO: Try TEST get req to our database

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/admin/add", adminProductRouter);
app.use("/admin", adminProductRouter);
app.use("/categories", categoriesRouter);
app.use("/orders", orderRouter);
app.use("/categories/new", categoriesRouter);


// TODO: ADD OUR ROUTES.
app.use("/products", productsRouter);

module.exports = app;
