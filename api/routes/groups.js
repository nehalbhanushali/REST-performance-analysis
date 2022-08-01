var express = require('express');
const { groups } = require('../data');
var router = express.Router();

/* GET groups listing. */
router.get('/', (req, res) => {
  res.json(groups);
});

module.exports = router;