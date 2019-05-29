const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create post schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
});

mongoose.model('post', PostSchema);
