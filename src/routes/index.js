const express = require('express');
const todoRoutes = require('./todo_routes');
const userRoutes = require('./user_routes');

const router = express.Router();

// Use different route modules
router.use('/todos', todoRoutes);
router.use('/users', userRoutes);

module.exports = router;
