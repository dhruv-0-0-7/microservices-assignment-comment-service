const { Router } = require("express");

const commentController = Router();

// Example Route
commentController.get('/status', (req, res) => {
    res.send({ message: 'Comment Service Success' });
});

module.exports = commentController;