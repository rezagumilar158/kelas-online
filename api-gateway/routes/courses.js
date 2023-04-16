const express = require('express');
const router = express.Router();
const {APP_NAME}=process.env;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('courses');
});

module.exports = router;
