var express = require('express');
var router = express.Router();

const Category_16=require('../models/Category_16');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try{
      let results = await Category_16.fetchAll();
      console.log('results',JSON.stringify(results));
      res.render('crown2_16/index', { 
        data: results,
        id: '409411716',
        title: 'crown2' 
    });
    }catch(err){
      console.log(err);
    }
  });
module.exports = router;
