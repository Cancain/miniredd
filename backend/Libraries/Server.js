const express = require("express");

const app = express();

// Set up cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type", "application/json");
  next();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

module.exports = app;
