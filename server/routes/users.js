// File Name: COMP229 Midterm
// Student Name: Steven Chen
// Student Number: 301159710
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
