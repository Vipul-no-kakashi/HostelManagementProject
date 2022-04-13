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
        unique: true,
    },
    MobNo:{
        type: String,
        require: true,
        unique: true,
    },
    Birthdd:{
        type: Date,
        require: true,
    },
    Birthmm:{
        type: Date,
        require: true,
    },
    Birthyy:{
        type: Date,
        require: true,
    },
    ResidentialAdress:{
        type: String,
        require: true,
    },
    Course:{
        type: String,
        require: true,
    },
    Department:{
        type: String,
        require: true,
    },
    yearOfGraduation:{
        type: String,
        require: true,
    },
    Hostel:{
        type: String,
    },
    Flatno:{
        type: String,
    },
    RoomNo:{
        type: String,
    }

});

module.exports = mongoose.model('profile', profileSchema);