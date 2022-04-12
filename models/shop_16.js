const db = require('../utils/database3');

const shop_16 = class shop_16 {
    constructor(id,name,cat_id,price,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
        
    }
    static async fetchAll(){
        try{
            let results = await db.query('SELECT * from shop_16');
            //console.log('results',results.rows);
            return results.rows;
        }catch(err){
            console.log('error',err);
        }
    }

    static async fetchProductByCategory(id){
        const query = { 
            text: `SELECT * from shop_16 where cat_id =$1`,
            values:[id]
        }
    try{
        let results = await db.query(query);
        //console.log('results',results.rows);
        return results.rows;
    }catch(err){
        console.log(err);
    }
}
}

const test = async () => {
let results = await shop_16.fetchProductByCategory(1);
 console.log('test results',  JSON.stringify(results));
}

test();

module.exports = shop_16;