const mongoose = require('mongoose');

var BrandSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    isActive:{
        type:Boolean
    },
    description:{
        type:String,
        trim:true
    }


},{timestamps:true});

mongoose.model('Brand',BrandSchema);
module.exports = mongoose.model('Brand');