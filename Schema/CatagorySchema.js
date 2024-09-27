const mongoose=require('mongoose')
const {Schema}= mongoose;
const catagorySchema=new Schema({
    catagory_name:{
        type:String,
        required:true
    }
})
module.exports=new mongoose.model('post-catagory',catagorySchema)