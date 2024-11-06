const express = require('express');
const connectDB = require('./src/config/dbConfig');
const bodyParser=require("body-parser")
//importing routes
const userRoute=require("./src/routes/userRoute")

const app = express();
// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json())
// app.use(express.json());
 
//Routes
app.use("/user",userRoute);

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
