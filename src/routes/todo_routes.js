const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo_controller');

// Routes for CRUD operations
router.get('/items', todoController.getAllTodos);
router.get('/items/:_id', todoController.getTodoById);
router.post('/items', todoController.createTodo);
router.put('/items/:_id', todoController.updateTodo);
router.delete('/items/:_id', todoController.deleteTodo);
router.post('/items/deletes', todoController.deleteMultipleTodos);

module.exports = router;
