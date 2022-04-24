var express = require('express');
var router = express.Router();

const Category_16 = require('../models/Category_16');
const Shop_16 = require('../models/shop_16');

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
  router.get('/shop_16/:category', async function(req, res) {
    console.log('category',req.params.category);
    try{
      const cid = await Category_16.fetchCatIdByName(req.params.category);
      console.log('cid',cid);
      let results = await Shop_16.fetchProductByCategory(cid);
      console.log('results',JSON.stringify(results));
  
      res.render('crown2_16/products_16',{
        data: results,
        title: req.params.category,
        name: '巫冠君',
        id: '409411716'
      });
  
    }catch(err){
      console.log(err);
    }
  });
module.exports = router;
