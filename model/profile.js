const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const profileSchema = new Schema({
    FirstName:{
        type: String,
        require: true
    },
    LastName:{
        type: String,
        require: true,
        unique: true 
    },
    
    Password:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('profile', profileSchema);