const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/todos',()=>{
    console.log('db connected')
})

