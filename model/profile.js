const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const profileSchema = new Schema({
    Name:{
        type: String
    },
    Department:{
        type: String
    },
    Year:{
        type: Number
    }
});

module.exports = mongoose.model('Profile', profileSchema);