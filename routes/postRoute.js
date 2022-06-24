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
            status: "insert not success"
        })
    }
})
//updated post

router.put('/update-post/:id',async(req,res)=>{
    const result = await  user.findByIdAndUpdate(req.params.id,req.body,{
        id: req.body.id,
        user_id: req.body.id,
        catagory_id: req. catagory_id,
        text: req.body.text,
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
    const result = await  user.findByIdAndUpdate(req.params.id);
    try{
        res.status(201).json({
            status: "Delete Success"
        })

    }catch(err){
        res.status(201).json({
            status: "Delete was not success"
        })
    }
    console.log(result)
})
module.exports =router