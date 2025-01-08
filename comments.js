// Create web server
// Create a route for comments
// Create a route for comments/:id
// Create a route for comments/:id/delete

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('Comments page');
});

app.get('/comments/:id', (req, res) => {
    res.send(`Comment id: ${req.params.id}`);
});

app.get('/comments/:id/delete', (req, res) => {
    res.send(`Delete comment id: ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});