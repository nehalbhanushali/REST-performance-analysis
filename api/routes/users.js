var express = require('express');
const { users } = require('../data');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;