const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here 
    ObjectID : String,
    topic : String,
    description : String,
    posted_at : String,
    posted_by : String

})

const Blog = mongooose.model('blog', blogSchema);

module.exports = Blog;