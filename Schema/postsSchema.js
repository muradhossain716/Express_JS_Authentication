const mongoose = require('mongoose')
const postsSchema = mongoose.Schema({
           id:{
              type: Number ,
               require: true
           } ,
    user_id:{
        type: Number,
        require: true
    },
    catagory_id:{
        type: Number,
        require: true
    },
    text:{
        type: String,
        require: true
    },
    create_date:{
        type: Date,
        require: true
    },
    delete_date:{
        type: Date,
        require: true
    }










})

module.exports= new mongoose.model("posts",postsSchema)