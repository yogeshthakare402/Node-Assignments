const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

// your code goes here

app.set('views', './operations');
app.set('view engine', 'ejs');

// let action = '/';

// let add = ()=>{
//     let num1 = Number(req.body.num1);
//     let num2 = Number(req.body.num2);
//     let sum = num1 + num2;
//     return sum;
// }
// let sub = ()=>{
//     let num1 = Number(req.body.num1);
//     let num2 = Number(req.body.num2);
//     let difference = num1 - num2;
//     return difference;
// }
// let multiply = ()=>{
//     let num1 = Number(req.body.num1);
//     let num2 = Number(req.body.num2);
//     let result = num1 * num2;
//     return result;
// }
// let divide = ()=>{
//     let num1 = Number(req.body.num1);
//     let num2 = Number(req.body.num2);
//     let result = num1 / num2;
//     return result
// }

// let actions = [add, sub, multiply, divide];

app.get("/", (req, res) => {
    res.render("calculator.ejs");
})

// app.get("/", (req, res) => {
//     res.send("<h1>Hello world!</h1>");
// })


app.post("/add", function (req, res) {
    // console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let sum = num1 + num2;
    // console.log(sum)
    res.send(`the sum of given two numbers  \n Sum :- ` + sum);
});


app.post("/sub", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let difference = num1 - num2;

    res.send(`the difference of given two numbers  \n difference :- ` + difference);
});

app.post("/multiply", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 * num2;

    res.send(`the product of given two numbers  \n result :- ` + result);
});
app.post("/divide", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 / num2;

    res.send(`the division of given two numbers  \n result :- ` + result);
});




app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;