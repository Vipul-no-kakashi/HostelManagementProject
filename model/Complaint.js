const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const complainSchema = new Schema({
    Email:{
        type: String
    },
    Mobno:{
        type: String
    },
    Subject:{
        type: String
    },
    Complaint:{
        type: String
    }
});

module.exports = mongoose.model('Complaint', complainSchema);