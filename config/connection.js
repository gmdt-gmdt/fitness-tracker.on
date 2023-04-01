const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_CONNECTION_STRING
    : "mongodb://localhost/fitnesstracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!");
  }
);

module.exports = mongoose.connection;
