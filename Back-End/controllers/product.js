var Product = require('../models/product');
var Type = require('../models/type');
var Brand = require('../models/brand');
const { json } = require('body-parser');
const type = require('../models/type');

const mongoose = require('mongoose');


exports.getProducts = (req,res)=>{
    var conditionType = {};
    var conditionBrand = {};

    var sortcondition={price:1}
    var condition = {stock:true};
    
    //req.query.name.replace(/%20/," ");
    
    // Cancel sort as per rating

    
    

    if(req.query.sort)
    {
        sortcondition={price:req.query.sort};
    }


    if(req.query.name && req.query.free)
    {
        condition={$and:[{name:req.query.name},{price:{$gt:15000}},{stock:true}]}
    }
    else if(req.query.free)
    {
        condition={$and:[{price:{$gt:15000}},{stock:true}]};
    }
    else if(req.query.name) 
    {
        condition={$and:[{name:req.query.name},{stock:true}]}
    }
    




        if((req.query.type||req.query.typeid) && (req.query.brand||req.query.brandid))
        {
            conditionBrand={name:req.query.brand};
            conditionType={$or:[{name:req.query.type},{_id:req.query.typeid}]};
        }
        else if(req.query.type||req.query.typeid)
        {
            conditionType={$or:[{name:req.query.type},{_id:req.query.typeid}]};
        }
        else if(req.query.brand||req.query.brandid)
        {
            conditionBrand={$or:[{name:req.query.brand},{_id:req.query.brandid}]};
        }


    

    
    
        Product.find(condition)
        .populate({path:'type',match:conditionType})
        .populate({path:'brand',match:conditionBrand})
        .sort(sortcondition)
        .exec((err,result)=>{
            let d=[];
            var k=0;

            if(err)res.json({err});
            

            for(i=0;i<result.length;i++)
            {
                if(result[i].type != null && result[i].brand!=null)
                {
                    d[k]=result[i];
                    k++;
                }
            }
            

            res.json(d);
        });
    

    

    
    
};

exports.updateProduct = (req,res)=>{
    var id = req.body._id;
    Product.findByIdAndUpdate({_id:id},
        {
            $set:{
                name:req.body.name,
                price:req.body.price,
                description:req.body.description,
                stock:req.body.stock,
                quantity:req.body.quantity,
                type:req.body.type,
                rating:req.body.rating,
                brand:req.body.brand,
                discount:req.body.discount
            }
        }
        ,(err,result) => {
            if(err) throw err;
            res.status(200).send('Data Updated')
        })
}





exports.newProduct = (req,res)=>{
    let condition = {};

    

    Product.create(req.body,
    (err,user) => {
            if(err) res.send(err);
            res.status(200).json(user);
        }
    );
};


exports.deleteStock = (req,res) => {
    var id = req.body._id
    Product.findByIdAndUpdate(
        {_id:id},
        {
            $set:{
                stock:false
            }
        },(err,result) => {
            if(err) throw err;
            res.status(200).send('Data Updated')
        }
    )
}


exports.removeProduct = (req,res)=>{
    var id = req.body._id;
    Product.findByIdAndRemove({_id:id},(err,result)=>{
        if(err) throw err;

        res.send('Remove product');
    })
}