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
    },
    SecondaryEmail:{
        type: String,
        require: true,
    },
    MobNo:{
        type: String,
        require: true,
    },
    B:{
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('profile', profileSchema);