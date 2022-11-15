var http = require("http");
const qstr = require("querystring");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    console.log(req.url);
    if(req.url=="/welcome"){
        res.writeHead(200,{
            "Content-Type": "text/plain",
            "Keep-Alive" : 10
        });
        res.end("Welcome to Dominos!")
    }else if(req.url == "/contact"){
        res.writeHead(200, {
            "Content-Type": "aplication/json",
            "Keep-Alive": 10
        });
        res.write(JSON.stringify({
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
        }));
        res.end();
    }else{
        res.writeHead(404, {
            "Content-type": "text/plain",
            "Keep-Alive": 10
        });
        res.write("PAGE NOT FOUND");
        res.end();
    }
    
    //write data and create file
    
}


httpServer.listen(8081,()=>{
    console.log("port is ready")
});

module.exports = httpServer;