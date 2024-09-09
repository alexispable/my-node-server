const express = require('express');
const app = express();

// Define the routes
app.get('/firstname', (req, res) => {
    res.send('Alexis'.toUpperCase());
});

app.get('/lastname', (req, res) => {
    res.send('Pable'.toUpperCase());
});

app.get('/age', (req, res) => {
    res.send('22');
});

app.get('/schoolemail', (req, res) => {
    res.send('alya.pable.swu@phinmaed.com');
});

app.get('/mydata', (req, res) => {
    const myData = {
        firstName: 'Alexis',
        lastName: 'Pable',
        age: '22',
        schoolEmail: 'alya.pable.swu@phinmaed.com'
    };
    res.json(myData);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
