const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express()
app.use(express.json())
dotenv.config()
mongoose.connect('mongodb://localhost/todos',()=>{
    console.log('db connected')
})
app.use('/',require('./routes/userRouter'))

app.listen(5000,()=>{
    console.log('express connected')
})