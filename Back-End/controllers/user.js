const jwt = require('jsonwebtoken');
const {secret} = require('../extrasF/config')
const bcrypt = require('bcrypt');
const { salt } = require('../extrasF/config');
const User = require('../models/user');



// create user

exports.createUser = (req,res)=>{
    var hashpassword = bcrypt.hashSync(req.body.password,salt);

    User.create({
        full_name:req.body.first_name,
        username:req.body.username,
        phone:req.body.phone,
        email:req.body.email,
        password:hashpassword,
        isActive:true,
        role:req.body.role
    },(err,result)=>{
        if(err) res.json(err);

        res.json('User Created');
    });
}


// get user information

exports.getUserInfo = (req,res)=>{
    var token = req.headers['x-access-token'];
    if(!token) return res.send({auth:false,token:"No Token Provided"});
    jwt.verify(token,secret,(err,data)=>{

        console.log({_id:data.id});
        if(err) return res.send({auth:false,token:"Invalid Token Provided"})
        User.findById(data.id,{password:0},(err,result) => {
            res.json(result);
        })
    })
}


// login user

exports.userLogin = (req,res)=>{
    User.findOne({email:req.body.email},
        (err,data)=>{
            if(err) res.json(err);
            if(!data) res.json('No User Found Register first');
            else{
                const passIsValid = bcrypt.compareSync(req.body.password,data.password);
                if(!passIsValid) res.status(401).send('Wrong password');

                var token = jwt.sign({id:data._id},secret,{expiresIn:"1d"});
                return res.json({auth:true,token:token});
                
            }

            
        })
}


// deactivate user


exports.deactivateUser = (req,res)=>{
    
    User.findOneAndUpdate({_id:req.body._id},
        {
            $set:{
                isActive:false
            }
        },(err,result)=>{
            
            res.json({message:'User Deactivated'});
        })
}




// activate User


exports.activateUser = (req,res)=>{
    
    User.findOne({email:req.body.email},(err,result)=>{
        if(err) throw err;

        if(!result) res.json({message:'Invalid email'});

        var passIsValid = bcrypt.compareSync(req.body.password,result.password);

        if(!passIsValid) res.json({'message':'Invalid password'});

        User.findByIdAndUpdate({_id:result._id},
            {
                $set:{
                    isActive:true
                }
            },
            (err,uni)=>{
                res.json({'message':'User Activated'});
            }
        );
    });
}
