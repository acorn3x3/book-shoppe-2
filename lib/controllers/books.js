const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const book = await Book.getById(req.params.id);
    res.json(book);
  })

  .get('/', async (req, res) => {
    const book = await Book.getAll();
    res.json(book);
  });
