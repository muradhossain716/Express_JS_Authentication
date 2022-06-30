const mongoose=require('mongoose')
const user=mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    created_at:{
        type: Date,
        require:true
    },
    country_code:{
        type: Number,
        required: true
    }
})
module.exports=new mongoose.model('user',user)