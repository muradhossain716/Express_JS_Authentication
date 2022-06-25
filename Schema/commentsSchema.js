const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema({
    id:{
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
module.exports= new mongoose.model("comment",commentsSchema)