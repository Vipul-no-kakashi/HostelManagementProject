const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
    Name:{
        type: String,
        require: true
    },
    Email:{
        type: String,
        require: true,
        unique: true 
    },
    Password:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema);