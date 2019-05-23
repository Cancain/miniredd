const app = require("./Libraries/Server");

//load post routes
const posts = require("./Controllers/Posts/Posts");
app.use("/posts", posts);
