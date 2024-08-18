const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    priority: { type: String, required: true },
    completed: { type: Boolean, required: true }
}, { versionKey: false });

const Todo = mongoose.model('all notes', todoSchema);

module.exports = Todo;
