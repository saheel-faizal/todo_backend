const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Use centralized routes
app.use('/api', routes);

// Connect to MongoDB and start server
mongoose.connect('mongodb://localhost:27017/todoDB')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
