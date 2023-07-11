const { Router } = require("express");

const commentController = Router();

// Example Route
commentController.get('/example', (req, res) => {
    res.send({ message: 'Comment Service Success' });
});

module.exports = commentController;