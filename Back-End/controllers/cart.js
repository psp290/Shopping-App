const Cart = require('../models/cart');
const Product = require('../models/product');



//  updateItemQuantity by itemId

exports.updateItemQuantity = (req,res)=>{
    Cart.findOneAndUpdate({'cartItems._id':req.body.itemId},{
        
       $set:{ 'cartItems.$.quantity':req.body.quantity}
        
    
    },
    (err)=>{
        if(err) res.json(err);

        res.json({'message':'Item updated'})
    })
};


// add item to cart

exports.addItemToCart = (req,res)=>{

    Cart.findOne({user:req.body.userId},(err,cart)=>{
        if(err) return res.json(err);

        if(cart){
            
            for(i=0;i<cart.cartItems.length;i++)
            {
                if(cart.cartItems[i].product==req.body.productId)
                {
                    return res.json({message:'item exist in cart go to cart'});
                }
                
            }

            cart.cartItems.push({product:req.body.productId});
            
            cart.save();

            return res.send('Item is added');
        }
        else
        {
            Cart.create({
                user:req.body.userId,
                cartItems:{product:req.body.productId}
            },(err)=>{
                if(err) return res.json(err);

                res.json({'message':'Cart is created'});

            })
        }
    });

}






// get cart details for user

exports.getCartDetails = (req,res)=>{
   

    Cart.findOne({user:req.body.userId})
        .populate('cartItems.product')
        .exec((err,result)=>{
            res.json(result);
        })
    
    
}


// Remove item from cart

exports.removeItem = (req,res)=>{
    Cart.findOneAndUpdate({},
    {
        $pull: {
            cartItems: {
              product: req.body.productId,
            },
        },
    }
    ,(err)=>{
        if(err) res.json(err);
        res.json({mess:'Item deleted'});
    })
};