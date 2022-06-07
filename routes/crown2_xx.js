var express = require('express');
var router = express.Router();

const Category_xx = require('../models/Category_xx');
const Shop_xx = require('../models/Shop_xx');

const crown2Controller_16 = require('../controllers/crown2Controller_16');
/* GET home page. */

  

router.post('/product_16/create',crown2Controller_16.createProducts) ;

router.get('/', crown2Controller_16.getCategories) ;
router.get('/shop_xx/:category',crown2Controller_16.getProductsByCategory) ;

router.post('/product_16/update',crown2Controller_16.updateProducts) ;

router.get('/product_16/delete/:id',crown2Controller_16.deleteProducts) ;


module.exports = router;