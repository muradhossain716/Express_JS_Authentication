const mongoose=require('mongoose')
const mySchema=mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=new mongoose.model('user',mySchema)