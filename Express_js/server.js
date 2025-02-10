const express = require('express');
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');

dotenv.config(); 

const employeeRoutes = require('./Routes/employeeRoutes');

const api = express();

const Port = process.env.PORT || 5050;

api.use(express.json()); // 

mongoose.connect(process.env.MONGO_URI)  
.then(() => {
    console.log('Connection successful');
})
.catch((error) => {
    console.error("Error:", error);
});

api.use('/employees', employeeroutes);

api.listen(port, () => {
    console.log(`Server started and running successfully on port ${port}`);
});
MONGO_URI