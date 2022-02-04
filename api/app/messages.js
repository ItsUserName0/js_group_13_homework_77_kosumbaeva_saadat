const express = require('express');
const db = require('../fileDb');

const router = express.Router();

router.get('/', (req, res) => {
  const messages = db.getMessages();
  res.send(messages);
});
router.post('/new', async (req, res, next) => {
  try {
    if (!req.body.message) {
      return res.status(400).send({message: 'Message is required'});
    }
    const message = {
      message: req.body.message,
    };
    if (req.body.author) {
      message.author = req.body.author;
    }
    if (req.file) {
      message.image = req.file.filename;
    }

    await db.addMessage(message);

    return res.send({message: 'Created new product'});
  } catch (e) {
    next(e);
  }
});

module.exports = router;