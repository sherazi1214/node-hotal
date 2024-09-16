const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

// Route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data); // Create a new instance of the Person model
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
        const people = await Person.find(); // Fetch all documents in the Person collection
        res.status(200).json(people); // Send the fetched data as the response
    } catch (err) {
        console.error('Error fetching data:', err); // Log the error
        res.status(500).json({ error: 'Internal server error' }); // Send back an error response
    }
});


router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id; // Get the ID from the request parameters
        const data = req.body; // Get the new data from the request body

        // Find the person by ID and update with new data
        const updatedPerson = await Person.findByIdAndUpdate(id, data, { new: true, runValidators: true });

        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found' }); // If no person found, return 404
        }

        res.status(200).json(updatedPerson); // Send back the updated document as the response
    } catch (err) {
        console.error('Error updating person:', err); // Log any error that occurs
        res.status(500).json({ error: 'Internal server error' }); // Send back an error response
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id; // Get the ID from the request parameters

        // Find the person by ID and delete
        const deletedPerson = await Person.findByIdAndDelete(id);

        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' }); // If no person found, return 404
        }

        res.status(200).json({ message: 'Person deleted successfully' }); // Send success response
    } catch (err) {
        console.error('Error deleting person:', err); // Log any error that occurs
        res.status(500).json({ error: 'Internal server error' }); // Send back an error response
    }
});








module.exports = router;