const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
    },
    decription:{
        type:String,
        trim:true
    },
    stock:{
        type:Boolean
    },
    quantity:{
        type:Number
    },
    type:{
        type:mongoose.Schema.Types.ObjectId, ref: 'Type'
    },
    rating:{
        type:Number
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId, ref: 'Brand',
    }

});



mongoose.model('Products',ProductSchema);
module.exports = mongoose.model('Products');