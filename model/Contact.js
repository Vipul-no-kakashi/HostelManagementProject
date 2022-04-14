const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const contactSchema = new Schema({
    Email:{
        type: String
    },
    Mobno:{
        type: String
    },
    Topic:{
        type: String
    },
    Message:{
        type: String
    }
});

module.exports = mongoose.model('Contact', contactSchema);