const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  points: {
    required: true,
    type: Number,
    default: 0,
  },
});

module.exports = ("user", UserSchema);
