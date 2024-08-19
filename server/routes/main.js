const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Routes
// GET /
// HOME
router.get("", async (req, res) => {
  const locals = {
    title: "Aaron's Blog",
    description: "Simple Blog Created By Aaron Thomas Blessen",
  };
  try {
    const data = await Post.find();
    res.render("index", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;

// function insertPostData() {
//   Post.insertMany([
//     {
//       title: "Building a Blog",
//       body: "This is the body text",
//     },
//   ]);
// }

// insertPostData();
