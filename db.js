const mongoose = require('mongoose');

// Connect to MongoDB (replace 'mydatabase' with the name of your database)
mongoose.connect('mongodb://localhost:27017/hotels')
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });

