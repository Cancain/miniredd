const express = require('express');

const router = express.Router();

// Load the database and the post model
const database = require('../../Libraries/Database');
require('../../Models/Post/Post');

const Post = database.model('post');

router.use(express.json());

// Posts index, loads all posts and ouputs in json
router.get('/', (req, res) => {
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
router.post('/', (req, res) => {
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

// Route for adding a test post ---->REMOVE THIS LATER<----
router.get('/test', (req, res) => {
  const newPost = new Post({
    title: 'Test post...',
    content: 'This is a test post. Lorem ipsum and all his friends walks into a bar...',
  });
  newPost
    .save()
    .then((post) => {
      res.redirect('/');
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
