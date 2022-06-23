const express=require('express');
const router=express.Router()
const user=require('../Schema/Schema')
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')
const {checkLogin} =require('../MiddleWares/AuthMiddleWare')
router.post('/signup',async(req,res)=>{
    try{
        console.log(req.body)
         const hashPassword=await bcrypt.hash(req.body.password,10)
        const newUser=new user({
            user_name:req.body.user_name,
            email:req.body.email,
            password:hashPassword
        })
        await newUser.save()
        res.status(200).json({
           "message" :"signup successful"
        })
    }
    catch(err){
        res.send({'error':'signup failed'})
    }
})
router.post('/login',async(req,res)=>{
    try{
        const {user_name,password}=req.body;
        const exists= await user.findOne({user_name:user_name})
        if(exists){
            
           
            try{

                const isPasswordValid= await bcrypt.compare(password,exists.password)
                if(isPasswordValid){
                    const token= await jwt.sign({
                        user_name,
                        user_id:exists._id
                    },process.env.SECRET_KEY)
                    res.status(200).json({
                        "authentication_token":token
                    })
                }else{
                    res.status(403).json({
                        "error" :"Authentication "
                     })
                }
            }
            catch(err){
                res.status(403).json({
                    "error" :err
                 })
            }
        }
       
    }
    catch(err){
        res.send({'error':'signup failed'})
    }
})

router.get('/privetroute',checkLogin,async (req,res)=>{
    res.send({
        'message':'you can access',
        'user_name':req.user_name
    })
})

module.exports=router;