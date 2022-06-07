const express = require('express');
const router = express.Router();

const Cart_16 = require('../models/Cart_16');


router.get('/cart_16', async function(req, res, next) {
    try {
     
      res.render('midterm_16/cart_16', {

        id: '409411716', 
        title: 'Crown2_16' 
      });
    }catch(err){
      console.log(err);
    }
  
  
  });
  router.get('/cart2_16', async function(req, res, next) {
    try {
      let results = await Cart_16.fetchCartInfo();
      console.log('Cart data ',JSON.stringify(results));
      let total = 0;
      console.log('total',total);
      console.log('userid',results[0].user_id);
      res.render('midterm_16/cart2_16', {

        id: results[0].user_id, 
        data: results,
        total: 500
      });
    }catch(err){
      console.log(err);
    }
  
  
  });

module.exports = router;
