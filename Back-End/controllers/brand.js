const Brand = require('../models/brand')

exports.getBrand = (req,res)=>{
    let condition = {};
    Brand.find(condition,(err,result)=>{
        if(err) throw err;

        res.json(result);
    });
}

exports.newBrand = (req,res)=>{
    Brand.create(req.body,(err,result)=>{
        if(err) throw err;

        res.json('Brand Register');
    });
}