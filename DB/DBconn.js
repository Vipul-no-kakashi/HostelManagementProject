const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://VipulMahajan:vipul04082002@cluster0.g0h86.mongodb.net/HMS?retryWrites=true&w=majority");
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB