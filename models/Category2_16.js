const db = require('../utils/database2');

const Category_16 = class Category_16 {
    constructor(id,name,size,remote_url,local_url,link_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;
    }
    static async fetchAll(){
        try{
            let results = await db.query('SELECT * from category_16');
            //console.log('results',results.rows);
            return results.rows;
        }catch(err){
            console.log('error',err);
        }
    }
}

const test = async () => {
let results = await Category_16.fetchAll();
 console.log('results',JSON.stringify(results));
}

test();

module.exports = Category_16;