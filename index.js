const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});
app.post("/", function (req, res) {
    console.log(req.body)
    var num1 = Number(req.body.num1); 
    var num2 = Number(req.body.num2); 
    var result = num1 + num2; 
    res.send("the result of this calculator is " + result);
});

const port = process.env.PORT || 3000;

app.listen(port, function () { 
    console.log("server started on port 3000"); });
