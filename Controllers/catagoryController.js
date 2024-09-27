
const mongoose= require('mongoose')
const catagory = require("../Schema/CatagorySchema");
const createCatagory= async (req, res)=> {
    try {
        console.log('i am in')
        const newCatagory = new catagory({
            catagory_name: req.body.catagory_name
        })
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
        console.log('i am in')
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

        const post=await catagory.findOneAndUpdate(
            {_id:req.params.id},
            {catagory_name:req.body.data.catagory_name})
        console.log('updated')
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

        await catagory.deleteOne({_id:req.params.id})
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
module.exports ={createCatagory,getCatagory,getAllCatagory,updateCatagory,deleteCatagory};