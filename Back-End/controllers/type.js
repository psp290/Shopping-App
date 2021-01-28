const Type = require('../models/type');

exports.getType = (req,res)=>{
    condition={};
    Type.find(condition,(err,result)=>{
        if(err) throw err;

        res.json(result);
    });
}

exports.newType = (req,res)=>{
    Type.create(req.body,(err,result)=>{
        if(err) res.json({err});

        res.json('Register Type');
    });
}