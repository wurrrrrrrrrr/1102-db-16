var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_16/index', { id: '409411716',name: 'wu' });
});
module.exports = router;
