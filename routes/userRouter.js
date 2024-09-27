const express=require('express');
const router=express.Router()
const user=require('../Schema/User1Schema')
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')
const {checkLogin} =require('../MiddleWares/AuthMiddleWare')
const {signupController,loginController, deleteUser,getAllUser} =require('../Controllers/userController')

router.post('/signup',signupController)

router.post('/login',loginController)

router.get('/privetroute',checkLogin,async (req,res)=>{
    res.send({
        'message':'you can access',
        'user_name':req.user_name
    })
})


router.delete('/delete-user/:id',deleteUser)
router.get('/get-all-user',getAllUser)

module.exports=router;