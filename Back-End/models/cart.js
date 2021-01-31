const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    cartItems: [
        {
            product: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Products' 
            },
            quantity: { 
                type: Number, 
                default: 1 
            }
        }
    ]
}, { timestamps: true });


 mongoose.model('Cart', cartSchema);

 module.exports = mongoose.model('Cart');