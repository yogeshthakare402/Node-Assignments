const express = require('express');
const app = express();


// Import routes
const blogRoute = require('./routes/blog');

//Router MIddlewares
app.use(express.json());
app.use('/', blogRoute);

// app.get("/user",(req,res)=>{
//     res.send("hello")
// })
module.exports = app;


// {
//     topic : "firstApp",
//     description : "this is my app",
//     posted_at : "nothing",
//     posted_by : "yogesh thakare"

// }
