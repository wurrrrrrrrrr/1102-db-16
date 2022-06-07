var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();

const db = require('../utils/database');

router.post('/create', async (req, res) => {
    console.log('body', req.body);
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price;

    try{
        const query = {
            text: 'INSERT INTO book_16 (id, name, author, price) VALUES ($1, $2, $3, $4)',
            values: [id, name, author, price],
        };
        await db.query(query);
        res.redirect('/book_16')
    }catch(error){
        console.log(error);
    }
});


/* GET home page. */
router.get('/', async (req, res, next) => {
    try{
        const results = await db.query('SELECT * FROM book_16');
        console.log('results ',JSON.stringify(results.rows));
        res.render('book_16', {
            data: results.rows,
            id: '409411716',
            name: '巫冠君',
    });
  }catch (error){
    res.render('book_16', {
            data: '',
            id: '409411716',
            name: '巫冠君',
    });
    }

});


router.get('/create', (req,res) => {
    res.render('book_16/add_16', {
        id: '409411716',
        name: '巫冠君',
    });
});
module.exports = router;