// Use the .env file
require("dotenv").config();

// Create an express application
const express = require("express");
const expressLayout = require("express-ejs-layouts");

const connectDB = require("./server/config/db");

// Initialize the express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

app.use(express.static("public"));

// Templating Layout
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Use the routes defined in 'main.js'
app.use("/", require("./server/routes/main"));

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
