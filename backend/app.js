// Load express config
const app = require('./Libraries/Server');

// load routes for posts
const posts = require('./Routes/Posts/Posts');

app.use('/posts', posts);
