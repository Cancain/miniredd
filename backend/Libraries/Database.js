const mongoose = require("mongoose");

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

module.exports = mongoose;
