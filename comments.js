// Create a Web Server
// Create a new file called comments.js and write the following code:

const express = require('express');
const router = express.Router();
const comments = require('../data/comments');

router.get('/comments', (req, res) => {
    res.json(comments);
});

router.get('/comments/:id', (req, res) => {
    const found = comments.some(comment => comment.id === parseInt(req.params.id));

    if (found) {
        res.json(comments.filter(comment => comment.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No comment with the id of ${req.params.id}` });
    }
});

module.exports = router;