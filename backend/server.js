const express = require('express');
const connectDB = require('./src/config/dbConfig');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
 
//Routes

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
