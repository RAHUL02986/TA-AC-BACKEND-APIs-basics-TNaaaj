var express = require('express');
var Country = require('../models/Country');

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    var countries = await Country.find({});
    res.json(countries);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    var createCountry = await Country.create(req.body);
    console.log(createCountry);
    res.send('country details is added to the database');
  } catch (error) {
    res.status(404).json({ msg: error.msg });
  }
});
module.exports = router;
