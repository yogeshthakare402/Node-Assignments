let http = require("http");
let fs = require("fs");

let server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type": "text/html",
        "Keep-Alive" : 10
    });
    //write data and create file
    fs.writeFile('index.html',`<h1> Hello World </h1><br/><p style=font-size:50px> This is Yogesh Thakare. </p>`, (err)=>{
        if(err) console.log(err);
    });

    //read the file and show it on server 5000
    fs.readFile('./index.html',(err, data)=>{
        if(err){console.log(err)}
        else{
             res.write(data.toString());
             res.end();
            };
    })
})
server.listen(5000);


//node simpleHTTPServer.js

//if getting error as
// Error: listen EADDRINUSE: address already in use :::5000
//do
// npm install -D kill-port     install to kill the port
// npx kill-port 5000
