const mongoose = require('mongoose');

// Connection to database
mongoose
  .connect('mongodb://localhost/miniredd', {
    useNewUrlParser: true,
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connected to mongoDB...');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });

module.exports = mongoose;
