const app = require("./server/src/app");
const dotenv = require("dotenv").config();

const { connectToMongoose } = require("./server/src/config/mongoose.js");

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server running on ", port);
  connectToMongoose();
});
