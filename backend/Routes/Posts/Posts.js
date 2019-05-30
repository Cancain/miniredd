/* eslint-disable no-param-reassign */
const express = require("express");

const router = express.Router();

// Load the database and the post model
const database = require("../../Libraries/Database");
require("../../Models/Post/Post");

const Post = database.model("post");

router.use(express.json());

// Posts index, loads all posts and ouputs in json
router.get("/", (req, res) => {
  Post.find({})
    .then((posts) => {
      console.log(`${Date.now()}: All posts loaded from database...`);
      res.end(JSON.stringify(posts));
    })
    .catch((err) => {
      console.log(err);
    });
});

// Adds a post to the database
router.post("/", (req, res) => {
  console.log(`Recived POST, status code: ${res.statusCode}`);
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  newPost
    .save()
    .then(() => {
      console.log(`Post added: ${newPost}`);
      res.end();
    })
    .catch((err) => {
      res.end(err);
    });
});

// Path for showing a certain post
router.get("/:id", (req, res) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      const json = JSON.stringify(post);
      console.log(`${Date.now()}: Post with id ${req.params.id} loaded`);
      res.end(json);
    })
    .catch((err) => {
      res.end(err);
      throw err;
    });
});

router.post("/vote", (req, res) => {
  console.log(`Recived POST, status code: ${res.statusCode}`);
  // console.log(req.body);

  const { postId, isUpVote } = req.body;

  Post.findOne({ _id: postId })
    .then((post) => {
      const oldPoints = post.points;
      let newPoints = null;

      if (isUpVote) {
        newPoints = oldPoints + 1;
      } else {
        newPoints = oldPoints - 1;
      }

      post.points = newPoints;

      console.log(post);

      post.save().then(console.log("post updated"));
    })
    .catch(err => console.log(err));
});

module.exports = router;
