const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Connection to database
mongoose
  .connect("mongodb://localhost/miniredd", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to mongoDB...");
  })
  .catch(err => {
    console.log(err);
  });

//Load the post schema
require("./models/Post");
const Post = mongoose.model("post");

//Index route
app.get("/", (req, res) => {
  const post = {
    title: "Test",
    content: "This is a test, warning!"
  };

  new Post(post)
    .save()
    .then(console.log("post added"))
    .catch(err => {
      console.log(err);
    });
});

//Get all posts route
app.get("/posts", (req, res) => {
  //Setting up headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  Post.find({})
    .then(posts => {
      console.log("All posts loaded from database...");
      res.end(JSON.stringify(posts));
    })
    .catch(err => {
      console.log(err);
    });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
