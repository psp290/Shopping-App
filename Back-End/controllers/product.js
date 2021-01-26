var Product = require('../models/product');





exports.getProducts = (req,res)=>{
    let condition = {};
    Product.find(condition,(err,result)=>{
        if(err) throw err;
        res.json(result);
    });      
};

exports.newProduct = (req,res)=>{
    let condition = {};
    

    Product.create(req.body,
    (err,user) => {
            if(err) res.send(err);
            res.status(200).json(user);
        }
    );
};