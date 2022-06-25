
const mongoose= require('mongoose')
const catagory = require("../Schema/CatagorySchema");
const catagoryController= async (req, res)=> {
    try {
        console.log('i am in')
        const newCatagory = new catagory({
            catagory_name: req.body.catagory_name
        })
        console.log(newCatagory,'catagory')
        await newCatagory.save()
        res.status(200).json({
            "message": "Catagory added successfully"
        })
    } catch (e) {
        res.status(300).json({
            "message": "Failed to add new catagory"
        })
    }
}
const getCatagory= async (req,res)=>{
    try{
        const post=await catagory.findOne({catagory_id:req.params.id})
        res.status(200).json({
            'result':post
        })
    }
    catch(e){
        res.status(300).send({
            'error':'Not Found'
        })
    }

}
const getAllCatagory= async (req,res)=>{
    try{
        const post=await catagory.find()
        console.log(post,'get all')
        res.status(200).json({
            'result':post
        })
        if(post){
            req.catagories=post;
        }else{
            res.status(300).send({
                'error':'not found any catagory'
            })
        }
    }
    catch(e){
        res.status(300).send({
            'error':'not found any catagory'
        })
    }

}

const updateCatagory=async (req,res)=>{
    try{

        const post=catagory.updateOne(
            {_id:req.body.params.id},
            {catagory_name:req.body.catagory_name})
        res.status(200).json({
            'result':post
        })
    }
    catch(e){
        res.status(300).send({
            'error':e
        })
    }

}
const deleteCatagory=async (req,res)=>{
    try{

        const post=catagory.deleteOne({_id:req.body.params.id})
        res.status(200).json({
            'result':'Deleted successfully'
        })
    }
    catch(e){
        res.status(300).send({
            'error':e
        })
    }

}
module.exports ={catagoryController,getCatagory,getAllCatagory,updateCatagory,deleteCatagory};