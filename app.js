const express = require("express");
const ejs = require("ejs");
const routes = require("./routes");
require("./config/db");
const app = express();

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// app.use('/css',static('/node_modules/'))
// Set the view engine to ejs
app.set("view engine", "ejs");
app.use("/", routes);

module.exports = app;
