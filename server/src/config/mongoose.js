const mongoose = require("mongoose");

const databaseURI = process.env.MONGODB_CONNECT_URI;

function connectToMongoose() {
  mongoose
    .connect(databaseURI)
    .then(() => {
      console.log("Connected to the database successfully.");
    })
    .catch((error) => {
      console.error("Could not connect to the database. Error:", error);
    });
}

module.exports = {
  connectToMongoose,
};
