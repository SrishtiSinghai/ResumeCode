const express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("public/resume.html",{root:__dirname})
});

app.listen(3000);
console.log("server is running at port 3000");