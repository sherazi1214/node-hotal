const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const { Error } = require('mongoose');
const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Server is running smoothly!');
});




//import the router file

const personRouter = require('./routes/personRoutes');
const menuItem = require('./routes/menuItem');
//use the router
app.use('/person', personRouter);
//use the router
app.use('/Menu', menuItem)



// Set up the server to listen on port 3000
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
