var express = require('express');
const { apps } = require('../data');
var router = express.Router();

/* GET apps listing. */
router.get('/', (req, res) => {
  res.json(apps);
});

module.exports = router;