const express = require('express');
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');
const config = require('../config');
const db = require('../fileDb');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

router.get('/', (req, res) => {
  const messages = db.getMessages();
  res.send(messages);
});
router.post('/new', upload.single('image'), async (req, res, next) => {
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