const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/todoDB', {
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));
}

module.exports = connectToDatabase;
