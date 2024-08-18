const Todo = require('../models/todo');

// Get all todos
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({dueDate:-1});
        res.json({ items: todos });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 

exports.getTodoById = async (req,res) => {
    try{
        console.log("id : "+req.params._id);
        const todo = await Todo.findById(req.params._id);
        console.log(todo);
        res.json({item : todo});
    }catch(e){

    }
}



// Create a new todo
exports.createTodo = async (req, res) => {
    try {
        // Exclude _id from the request body
        const { _id, ...todoData } = req.body;
        const newTodo = new Todo(todoData);
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Edit an existing todo
exports.updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params._id);
        if (!deletedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteMultipleTodos = async (req, res) => {
    try {
        const { ids } = req.body;
        const deletedTodos = await Todo.deleteMany({ _id: { $in: ids } });
        if (deletedTodos.deletedCount === 0) {
            return res.status(500).json({ error: true,message:"No Todos Found for Delete" });
        }
        res.json({ message: "Todos deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

