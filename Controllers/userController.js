const express=require('express');
const user=require('../Schema/Schema')
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')

const signupController = async(req,res)=>{
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
}

const loginController= async(req,res)=>{
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
                        "error" :"Authentication failed "
                     })
                }
            }
            catch(err){
                res.status(403).json({
                    "error" :'Authentication Failed'
                 })
            }
        }
        else{
            res.status(403).json({
                "error" :'Authentication Failed'
            })
        }
       
    }
    catch(err){
        res.send({'error':'Authentication failed'})
    }
}



module.exports = {signupController,loginController}
