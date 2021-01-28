var Product = require('../models/product');
var Type = require('../models/type');
var Brand = require('../models/brand');
const { json } = require('body-parser');
const type = require('../models/type');




exports.getProducts = async (req,res)=>{
    var conditionType = {};
    var conditionBrand = {};

    var condition = {};

    if(req.query.name)
    {
        condition={name:req.query.name}
    }

        if(req.query.type && req.query.brand)
        {
            conditionBrand={name:req.query.brand};
            conditionType={name:req.query.type};
        }
        else if(req.query.type)
        {
            conditionType={name:req.query.type};
        }
        else
        {
            conditionBrand={name:req.query.brand};
        }


    

    
    
        Product.find(condition)
        .populate({path:'type',match:conditionType})
        .populate({path:'brand',match:conditionBrand})
        .exec((err,result)=>{
            let d=[];
            var k=0;
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
    

    

    
    
    /*

        if(uni.type.name=="Mobile")
        {
            Product.find({type:uni.type})
            .populate('type')
            .populate('brand')
            .exec((err,result)=>{
                res.json(result);
            })
        }

    */



    /*
    Product.find({})
      .populate('type')
      .populate('brand')
      .exec((err,result)=>{
        if(err) throw err;

        res.json(result);
    });
    */
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