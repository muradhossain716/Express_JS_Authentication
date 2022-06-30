const express =require('express')
const router=express.Router()
const user=require('../Schema/postsSchema')

//created post
router.post("/insert",async (req,res)=>{
    const newPost = new user(req.body)
    try{
        await newPost.save()
        res.status(201).json({
            status: "insert was success"
        })
    }catch(err){
        res.status(201).json({
            status: "insert not success",
            "error":err
        })
    }
})

//get all post
router.get("/all-post",async (req,res)=>{

    try{
        const allPost = await user.find()
        res.status(201).json({
            status: "Get all post successfully",
            'result':allPost
        })
    }catch(err){
        res.status(201).json({
            status: "can't get any post"
        })
    }
})

//updated post
router.put('/update-post/:id',async(req,res)=>{
    const result = await  user.findByIdAndUpdate(req.params.id,req.body,{
        catagory_name: req.catagory_name,
        post_title:req.post_title,
        text: req.body.text_content,
        create_date : req.body.create_date,
        delete_date : req.body.delete_date
        // new : true,
        // runValidators : true
})
    try{
        res.status(200).json({
            status: "Update Success"
        })
    }catch(err){
        console.log(err)
        }

    console.log(result)
})

// delete post
router.delete("/delete-post/:id",async (req,res)=>{
     await  user.findByIdAndDelete(req.params.id);
    try{
        res.status(201).json({
            status: "Delete Success"
        })

    }catch(err){
        res.status(201).json({
            status: "Delete was not success"
        })
    }

})
module.exports =router