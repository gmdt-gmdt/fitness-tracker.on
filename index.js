const express = require("express");
const path = require("path");
require("dotenv").config();
const routes = require("./routes");
const db = require("./config/connection");

const PORT = 8888;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use(express.static("public"));
//index.js
app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
