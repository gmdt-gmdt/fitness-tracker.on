const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://gmdt8589:Mg020185awa89..@cluster0.obnac.mongodb.net/fitnesstracker",
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
