const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const profileSchema = new Schema({
    Name:{
        type: String
    },
    Email:{
        type: String
    },
    Password:{
        type: String
    },
    Department:{
        type: String
    },
    Year:{
        type: Number
    },
    Hostel:{
        type:String
    },
    Flatno:{
        type:Number
    }
});

module.exports = mongoose.model('Prof', profileSchema);