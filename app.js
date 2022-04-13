const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const connectDB = require('./DB/dbConn');
const User = require('./model/User'); 

connectDB();
// require("./db/conn");
// const Register = require("./model/Register");
// mongoose.connect("mongodb+srv://VipulMahajan:vipul04082002@cluster0.g0h86.mongodb.net/HMS?retryWrites=true&w=majority");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

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
// create a new user in database
app.post("/login",async (req,res) =>{
    try{
        const password=req.body.Password;
        const cpassword=req.body.ConfirmPassword;
        const Email=req.body.Email;
        const duplicate = await User.findOne({ Email: Email}).exec();
        if (duplicate) return res.sendStatus(409);
        if(cpassword===password){
            const a = new User({
                Name: req.body.Name,
                Email: req.body.Email,
                Password: password
            })
            const registered = await a.save();
            res.status(201).send("");//kam baki hain
        }else{
            res.send("Password are Not Maching");
        }
    }catch(error){
        res.status(400).send(error);
    }
})
app.post("/signin",async (req,res) =>{
    const password=req.body.Password;
    const email=req.body.Email;
    const foundUser = await User.findOne({Email : email}).exec();
    if (!foundUser) return res.sendStatus(401);
    else{
        if(foundUser.Password === password){
            res.status(201).send("Sucess");
        }else{
            res.send("Email and Password are Not Maching");
        }
    }  

})
app.get("/roomStatus",function(req,res){
    res.render("roomStatus");
})
app.listen(3000, function() {
    console.log("Server started on port 3000");
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(() => console.log(`Server running on port 30`));
});