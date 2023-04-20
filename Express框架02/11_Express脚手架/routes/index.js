var express = require('express');
var router = express.Router();

/* 主页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
