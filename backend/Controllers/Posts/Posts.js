const express = require("express");
const router = express.Router();

//Load the database and the post model
const database = require("../../Libraries/Database");
require("../../Models/Post/Post");
const Post = database.model("post");

//Posts index, loads all posts and ouputs in json
router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  Post.find({})
    .then(posts => {
      console.log(`${Date.now()}: All posts loaded from database...`);
      res.end(JSON.stringify(posts));
    })
    .catch(err => {
      console.log(err);
    });
});

//Adds a post to the database
router.post("/", (req, res) => {
  req.setHeader("Access-Control-Allow-Origin", "*");
  // req.setHeader("Content-Type", "application/json");

  const newPost = {
    title: req.query.title,
    content: req.query.content
  };

  console.log(newPost);
});

module.exports = router;
