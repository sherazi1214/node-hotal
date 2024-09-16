const express = require('express');
const router = express.Router();
const Menu = require('./../models/Menu');


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Menu(data); // Create a new instance of the Person model
        const response = await newPerson.save(); // Save the new person to the database
        console.log('Data saved');
        res.status(200).json(response); // Send back the saved document
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/', async (req, res) => {
    try {
        const people = await Menu.find(); // Fetch all documents in the Person collection
        res.status(200).json(people); // Send the fetched data as the response
    } catch (err) {
        console.error('Error fetching data:', err); // Log the error
        res.status(500).json({ error: 'Internal server error' }); // Send back an error response
    }
});


module.exports = router;
