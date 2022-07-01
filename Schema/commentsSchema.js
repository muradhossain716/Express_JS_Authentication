const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema({
    text:{
        type: String,
        require: true
    }
},{timestamps: true})
module.exports= new mongoose.model("comment",commentsSchema)