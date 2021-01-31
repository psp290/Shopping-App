const Cart = require('../models/cart');
const Order = require('../models/order');
const Product = require('../models/product');


exports.placeOrder = (req,res)=>{

    Cart.findOneAndDelete({_id:req.body.cartId},(err,cart)=>{

        var t=cart.cartItems;
        
        
        
        Order.create({
            user:req.body.user,
            country:req.body.country,
            state:req.body.state,
            city:req.body.city,
            address:req.body.address,
            pinCode:req.body.pinCode,
            totalAmount:req.body.totalAmount,
            items:t,

            paymentStatus:req.body.paymentStatus,
            paymentType:req.body.paymentType,
            orderDate:new Date()
        },
        (err,result)=>{
            res.json(result);
        })

    })

}


exports.getOrderById = (req,res)=>{
    Order.find({user:req.body.user},(err,result)=>{
        if(err) res.json(err);

        res.json(result);
    })
    .populate('item.product');
}

exports.getAllOrders = (req,res)=>{
    Order.find({},(err,result)=>{
        if(err) res.json(err);

        res.json(result);
    })
    .populate('item.product');
}




exports.orderPacked = (req,res)=>{

    Order.findOneAndUpdate({_id:req.body.orderId},
        {
            $set:{
                'orderStatus.packed':true
            }
        },(err)=>{
            if(err) res.json(err);

            res.json('Order Packed');
        })
}



exports.orderShipped = (req,res)=>{

    Order.findOneAndUpdate({_id:req.body.orderId},
        {
            $set:{
                'orderStatus.shipped':true
            }
        },(err)=>{
            if(err) res.json(err);

            res.json('Order Shipped');
        })
}


exports.orderDelivered = (req,res)=>{

    Order.findOneAndUpdate({_id:req.body.orderId},
        {
            $set:{
                'orderStatus.delivered':true
            }
        },(err)=>{
            if(err) res.json(err);

            res.json('Order delivered');
        })
}