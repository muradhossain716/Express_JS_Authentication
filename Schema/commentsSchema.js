const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema({
    text:{
        type: String,
        require: true
    },
    user:
        {
            type: mongoose.Types.ObjectId,
            ref: "user"
        }

},{timestamps: true})
module.exports= new mongoose.model("comment",commentsSchema)