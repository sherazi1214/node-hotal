const mongoose = require('mongoose');

// Define the Hotel Menu schema
const menuSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true,  // Dish name is required
        trim: true
    },
    category: {
        type: String,
        enum: ['Starter', 'Main Course', 'Dessert', 'Beverage'],  // Categories for the dish
        required: true
    },
    price: {
        type: Number,
        // required: true,  // Price is required
        // min: [0, 'Price cannot be negative']  // Price must be a positive number
    },

});

// Create and export the Menu model
const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
