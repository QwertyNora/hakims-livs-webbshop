const mongoose = require("mongoose");

const databaseURI = process.env.MONGODB_URI;

function connectTomongoose() {
  mongoose
    .connect(databaseURI)
    .then(() => {
      console.log("Connected to db", databaseURI);
    })
    .catch((error) => {
      console.log("Could not connect to DB", databaseURI, error);
    });
}

module.exports = {
  connectTomongoose,
};
