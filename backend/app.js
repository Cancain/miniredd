// const bodyParser = require('body-parser');
const express = require('express');
const app = require('./Libraries/Server');

// Set up cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Content-Type', 'application/json');
  next();
});

// Body parser middleware
app.use(express.json());

// load post routes
const posts = require('./Routes/Posts/Posts');

app.use('/posts', posts);
