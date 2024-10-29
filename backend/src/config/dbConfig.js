// src/config/db.js

const mongoose = require('mongoose');
require('dotenv').config(); // Ensure environment variables are loaded

const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/mydatabase'; // Default to localhost

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
