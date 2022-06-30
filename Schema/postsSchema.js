const mongoose = require('mongoose')
const postsSchema = mongoose.Schema({
    catagory_name:{
        type: String,
        require: true
    },
    post_title:{
        type: String,
        require: true
    },
    text_content:{
        type: String,
        require: true
    },
    create_date:{
        type: Date,
        require: true
    }
})

module.exports= new mongoose.model("posts",postsSchema)