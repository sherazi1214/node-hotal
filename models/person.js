const mongoose = require('mongoose');

// // Define the Person schema
// const personSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true, // Name is required
//         trim: true
//     },
//     work: {
//         type: String,
//         enum: ['chep', 'waiter', 'meneger'],
//         required: true, // Work is required
//         trim: true
//     },
//     phone: {
//         type: String,
//         required: true, // Phone number is required
//         unique: true,   // Phone number should be unique
//         match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'] // Example validation for a 10-digit phone number
//     },
//     email: {
//         type: String,
//         required: true, // Email is required
//         unique: true,   // Email should be unique
//         match: [/.+\@.+\..+/, 'Please enter a valid email address'] // Basic email validation
//     },
//     salary: {
//         type: Number,
//         required: true, // Salary is required
//         min: [0, 'Salary cannot be negative'] // Salary should be a non-negative number
//     }
// });

// // Create the Person model from the schema
// const Person = mongoose.model('Person', personSchema);

// // Export the model to use it elsewhere in your app
// module.exports = Person;
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    work: {
        type: String,
        enum: ['chep', 'waiter', 'meneger'],
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    salary: {
        type: Number,
        required: true,
        min: [0, 'Salary cannot be negative']
    }
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;