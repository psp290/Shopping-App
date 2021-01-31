
const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    address:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    pinCode:{
        type:String
    },


    totalAmount:{
        type:Number
    },
    items:[
        {
            product: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Products",
            },
            quantity: {
              type: Number,
            },
          }
    ],

    paymentStatus:{
        type:String
    },

    paymentMethod:{
        type:String
    },

    orderStatus:{
        ordered:{type:Boolean,default:true},
        packed:{type:Boolean,default:false},
        shipped:{type:Boolean,default:false},
        delivered:{type:Boolean,default:false}
    },

    orderDate:{
        type:Date
    }




});


mongoose.model('Orders',orderSchema);

module.exports = mongoose.model('Orders');