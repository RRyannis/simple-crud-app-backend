const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route.js');
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//routes
app.use('/api/products', productRoute);




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/', (req, res) => {
    res.send('Hello from NODE API');
});



mongoose.connect("mongodb+srv://johnram216:johnram216@backenddb.kgu4kk2.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to the database");
})
.catch(() => {
    console.log("Connection failed");
});