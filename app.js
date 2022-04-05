const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const app = express();

//mongoose.connect("mongodb+srv://saurabh:saurabh@cluster0.mv6d1.mongodb.net/blogList");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.render("index");
})

app.get("/gallery",function(req,res){
    res.render("gallery");
})

app.get("/booking",function(req,res){
    res.render("booking");
})

app.get("/contact",function(req,res){
    res.render("contactUs");
})

app.get("/complaints",function(req,res){
    res.render("complaints");
})

app.get("/suggestion",function(req,res){
    res.render("suggestion");
})
app.get("/login",function(req,res){
    res.render("login");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });