const mongoose = require('mongoose')
const postsSchema = mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    category_id: {
        type: String,
    },
    post_title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    comment:{
        type: mongoose.Types.ObjectId,
        ref: "comment"
    }
    // comment: [
    //     {
    //         type: mongoose.Types.ObjectId,
    //         ref: "comment"
    //     }
    // ]

}, {timestamps: true})

module.exports = new mongoose.model("posts", postsSchema)

