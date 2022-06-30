const express =require('express')
const router = express.Router();
const user= require('../Schema/commentsSchema')

//Create Comment
router.post('/comment-create',async (req,res)=>{
  const newComment =new user(req.body)
    try{
      await newComment.save()
        res.status(201).json({
            status: "Comment Create Success"
        })
    }catch(err){
      res.status(201).json({
          status: " Comment Create Success"
      })
    }
})
//Update Comment
router.put('/update-comment/:id',async (req,res)=>{
    const result =await user.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    })
    try{
        res.status(201).json({
            status: "Comment Update Success"
        })
    }catch(err){
        res.status(201).json({
            status: " Comment update fail"
        })
    }
    console.log(result);
})
// Delete Post
router.delete("/delete-comment/:id",async (req,res)=>{
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
module.exports = router;