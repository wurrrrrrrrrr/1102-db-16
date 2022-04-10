var express = require('express');
var router = express.Router();

const Category_16=require('../models/Category2_16');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try{
      let results = await Category_16.fetchAll();
      console.log('results',JSON.stringify(results));
      res.render('crown3_16/index', { 
        data: results,
        id: '409411716',
        title: 'crown3' 
    });
    }catch(err){
      console.log(err);
    }
  });
module.exports = router;