var express = require('express');
var router = express.Router();
const {APP_NAME}=process.env;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('payments');
});

module.exports = router;
