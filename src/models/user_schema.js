const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String , requried: true},
    email: {type: String , requried: true},
    phone: {type: String , requried: true},
    address: {type: String , requried: true},
},{versionKey: false});

const User = mongoose.model('user', userSchema);

module.exports = User;