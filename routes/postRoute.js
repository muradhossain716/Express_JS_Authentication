const express =require('express')
const router=express.Router()
const post=require('../Schema/postsSchema')
const {checkLogin} = require("../MiddleWares/AuthMiddleWare")

//created post
router.post("/insert",checkLogin,async (req,res)=>{
    const newPost = new post({
        ...req.body,
        comment : req.user_id
    })
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
        const allPost = await post.find()
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

//get post with comment

// public courseListRead(): Promise<ICourse[]> {
//     return this.courseModel.find().sort({
//         index: 1
//     }).populate('instructor').populate({
//         path: 'categories',
//         populate: {
//             path: 'posts',
//             model: 'CourseCategoryPost'
//         }
//     }).exec();
// }

router.get("/post-with-comment", (req, res) => {
    post.find()
        .populate("comment")
        .populate('user')
        .lean()
        // .select({
        //     _id: 0,
        //     __v: 0,
        //     date: 0,
        // })
        // .limit(2)
        .exec((err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error!",
                });
            } else {
                res.status(200).json({
                    result: data,
                    message: "Success",
                });
            }
        });
});







//updated post
router.put('/update-post/:id',async(req,res)=>{
    const result = await  post.findByIdAndUpdate(req.params.id,req.body,{
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
     await  post.findByIdAndDelete(req.params.id);
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