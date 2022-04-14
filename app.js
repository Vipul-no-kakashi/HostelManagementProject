const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const connectDB = require('./DB/dbConn');
const User = require('./model/User');
const Profile = require('./model/Profile');
const Complaint = require('./model/Complaint'); 
const Contact = require('./model/Contact');
const Suggestion = require('./model/Suggestion');

// function upsert(db, doc, callback) {
//     db.collection('flags').update({vid: doc.vid}, {$set: doc}, {upsert: true}, function(err) {
//       db.collection('flags').update({vid: doc.vid, tmx: {$lt: doc.tmx}}, {$set: tmx: doc.tmx}, function(err) {
//         callback();
//       });
//     });
//   }

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
app.get("/apj",function(req,res){
    res.render("apj");
})
app.get("/cvr",function(req,res){
    res.render("cvr");
})
app.get("/da",function(req,res){
    res.render("da");
})
app.get("/hjb",function(req,res){
    res.render("hjb");
})
app.get("/vsb",function(req,res){
    res.render("vsb");
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
            res.status(201).render("profile");//kam baki hain
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
            res.status(201).render("index");
        }else{
            res.send("Email and Password are Not Maching");
        }
    }  
})
app.post("/profile",async (req,res) =>{
    const a = new Profile({
        Name: req.body.FullName,
        Department: req.body.Department,
        Year: req.body.Year
    });
    const ered = await a.save();
    res.status(201).render("index");
})
app.post("/complaint",async (req,res) =>{
    const a = new Complaint({
        Email: req.body.email,
        Mobno: req.body.mobno,
        Subject: req.body.Subject,
        Complaint: req.body.complaint
    });
    const rered = await a.save();
    res.status(201).render("index");
})
app.post("/contact",async (req,res) =>{
    const a = new Contact({
        Email: req.body.email,
        Mobno: req.body.mobno,
        Topic: req.body.topic,
        Message: req.body.message
    });
    const rered = await a.save();
    res.status(201).render("index");
})
app.post("/suggestion",async (req,res) =>{
    const a = new Suggestion({
        Email: req.body.email,
        Mobno: req.body.mobno,
        Topic: req.body.topic,
        Message: req.body.suggestion
    });
    const rered = await a.save();
    res.status(201).render("index");
})
app.get("/roomStatus",function(req,res){
    res.render("roomStatus");
})
app.get("/profile",function(req,res){
    res.render("profile");
})
app.listen(3000, function() {
    console.log("Server started on port 3000");
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(() => console.log(`Server running on port 3000`));
});