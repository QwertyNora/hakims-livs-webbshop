//TODO App
const Express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/product.route");

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const allowedOrigins = ['http://localhost:3000', 'https://hakims-livs-webbshop-1.onrender.com/'];
// TODO: Add our origin
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

// TODO: Try TEST get req to our database

app.get("/", (req, res) => {
  res.send("Hello");
});

// TODO: ADD OUR ROUTES.
app.use("/products", productsRouter);

module.exports = app;
