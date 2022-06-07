const Category_xx = require('../models/Category_xx');
const Shop_xx = require('../models/Shop_xx');


exports.getCategories = async (req, res) =>{
    try {
        let results = await Category_xx.fetchAll();
        console.log('results', JSON.stringify(results));
        res.render('crown2_xx/index', {
          data: results,
          id: '123456789', 
          title: 'Crown2_DB' 
        });
      }catch(err){
        console.log(err);
      }
    
};
exports.getProductsByCategory = async (req, res) =>{
  console.log('category', req.params.category);
   
   try{
     const cid = await Category_xx.fetchCatIdByName( req.params.category);
    //  console.log('cid', cid);
    //  const results = Shop_xx.fetchProductsByCategory(cid);
    let results = await Shop_xx.fetchProductsByCategory(cid);
    console.log('results', JSON.stringify(results));

    res.render('crown2_xx/products_xx', {
      data: results,
      title: req.params.category,
      name: 'Hisngtai Chung',
      id: '123456789', 
    });

   }catch(err){
     console.log(err);
   }
};
exports.createProducts = async (req, res) =>{
  console.log('body',req.body);
  try{
    let results = await Shop_xx.create(req.body);
    console.log('results',JSON.stringify(results));
    res.json({
      msg: 'create -- body data received',
      data: results,
    });
  }catch(err){
    console.log(err);
  }
};
exports.deleteProducts = async (req, res) => {
  console.log('delete id',req.params.id);
  try{
    const results = await Shop_xx.deleteById(req.params.id);
    res.json({
      msg: 'Deletion successful',
      data: results,
    });
  }catch(err){
    console.log(err);
  }
};
exports.updateProducts = async (req, res) => {
  console.log('body',req.body);
  try{
    let results = await Shop_xx.update(req.body);
    res.json({
      msg: 'Update successful',
      data: results,
    });
  }catch(err){
    console.log(err);
  }
};
