const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://konga:konga@cluster0.ak8uw.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('db connected')
})
// mongoose.connect('mongodb://localhost:27017/todos',()=>{
//     console.log('db connected')
// })