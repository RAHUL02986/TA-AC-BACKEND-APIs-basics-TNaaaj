var express = require('express');
var router = express.Router();
var State = require('../models/State');
/* GET users listing. */

router.get('/', async (req, res) => {
  try {
    var states = await State.find({});
    res.json(states);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    var createState = await State.create(req.body);
    console.log(createState);
    res.send('state details is added to the database');
  } catch (error) {
    res.status(404).json({ msg: error.msg });
  }
});
module.exports = router;
