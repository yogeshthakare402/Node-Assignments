const express = require('express');
const studentArray = require("./InitialData");
const bodyParser = require("body-parser");
const path =require("path")
const app = express();

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// your code goes here
app.set('views', './student');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("student.ejs");
});

app.get("/api/student", (req, res) => {
    try{
        res.status(200).json({
            status: "Sucess",
            data: studentArray
        })

    }catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})

app.get('/api/student/:id', (req, res) => {
    try{
        studentArray.map(data=>{
            if(req.params.id==data.id){
                res.status(200).json({
                    status: "Sucess",
                    data: data
                })
            }
        })
        
        
    }catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})

app.post('/api/student', (req, res) => {
    try{
        // res.send("I am in")
        let new_id ;
        studentArray.map(data=>{
            let currid =  Math.floor(Math.random() * 1000);
            if(currid !== data.id){
                new_id = currid;
            }else{
                new_id = Math.floor(Math.random() * 1000);
            }
        });

        
        let responce = {
            id: new_id,
            name: req.body.name,
            currentClass: req.body.currentClass,
            division: req.body.division
        };

        let result1 = "name" in responce;
        let result2 = "currentClass" in responce;
        let result3 = "division" in responce;

        if(result1==true && result2==true && result3==true){
            res.writeHead(200,{
                'content-type':'application/x-www-form-urlencoded'
            });
            res.end(JSON.stringify({
                status: "Sucess",
                new_id: responce.id
            }))
        }
        
    }catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})
app.put("/api/student/:id", (req, res) => {
    try {
        // res.send("I am in")        
        studentArray.map(data => {
            //check for matching id
            if (req.params.id == data.id) {
                // console.log(req.params.id)
                //if id found then fill details to update
                let responce = {
                    name: req.body.name,
                    currentClass: req.body.currentClass,
                    division: req.body.division
                }
                console.log(responce)
                res.writeHead(200, {
                    'content-type': 'application/x-www-form-urlencoded'
                });
                
                res.end(JSON.stringify({
                    status: "Sucess",
                    data: responce
                }))
            }
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})

app.delete("/api/student/:id", (req, res) => {
    try {
        // res.send("I am in")        
        studentArray.map(data => {
            //check for matching id
            if (req.params.id == data.id) {
                // console.log(req.params.id)
                //if id found then delete
                res.writeHead(200, {
                    'content-type': 'application/x-www-form-urlencoded'
                });
                
                res.end(JSON.stringify({
                    status: "Sucess",
                    message: "Data has been deleted"
                }))
            }
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   