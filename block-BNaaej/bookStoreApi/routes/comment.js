var express = require('express');
var router = express.Router();
var Book = require('../models/Book');
var Comment = require('../models/Comment');

// find a comment
router.get('/allComment', async (req, res) => {
  try {
    var comments = await Comment.find({});
    console.log(comments);
  } catch (e) {
    res.status(404).json({ e });
  }
});

/* create a comment. */

router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { $push: { commentId: comment._id } },
      { new: true }
    );
    console.log(book);
    res.json({ book: book });
  } catch (e) {
    res.status(400).send(e);
  }
});

// edit a comment

router.get('/:id/edit', async (req, res) => {
  try {
    var { id } = req.params;
    var comment = await Comment.findById(id, req.body);
    res.send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
});

//update a comment
router.post('/:id/update', async (req, res) => {
  try {
    const updateComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updateComment);
  } catch (e) {
    res.status(400).send(e);
  }
});

//delete a comment

router.get('/:id/delete', async (req, res) => {
  try {
    const commentDelete = await Comment.findByIdAndDelete(req.params.id);
    const updateBook = await Book.findByIdAndUpdate(commentDelete.bookID, {
      $pull: { commentId: commentDelete._id },
    });
    res.json(updateBook);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
