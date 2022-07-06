const express=require('express')
const dotenv=require('dotenv')
const app=express()
const cors=require('cors')
app.use(express.json())
dotenv.config()
app.use(cors())

require("./Helpers/dbConnection")
require("./MiddleWares/errorHandler")
app.use('/',require('./routes/userRouter'))
app.use('/',require('./routes/postRoute'))
app.use('/',require('./routes/catagoryRoutes'))
app.use('/',require('./routes/commentRoute'))


app.get('/',(req,res)=>{
    res.send("Hello world there")
})
app.listen(process.env.PORT,()=>{
    console.log('express connected')
})