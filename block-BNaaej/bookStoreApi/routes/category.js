let express = require('express');
const Category = require('../models/Category');

let router = express.Router();
// - create a category
// - edit/delete a category
// - list all categories
// - list books by category
// - count books for each category
// - list books by author

router.get('/allcategories', async (req, res) => {
  try {
    var category = await Category.find({}).distinct('name').exec(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id/books', async (req, res) => {
  try {
    var id = req.params.id;
    var result = await Category.findById(id.at, req.body).populate('bookId').exec(result)
  } catch (err) {
    res.status(400).json({ err });
  }
})

module.exports = router;
