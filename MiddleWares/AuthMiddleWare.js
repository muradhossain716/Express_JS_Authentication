const jwt = require("jsonwebtoken");

const checkLogin=async(req,res,next)=>{
    const { authorization }=req.headers;
    const token= authorization.split(' ')[1];
    try{
        const decoded= await jwt.verify(token, process.env.SECRET_KEY)
        if(decoded){
            req.user_name=decoded.user_name
            req.user_id=decoded.user_id
            next()
        }
        else{
            next('Authentication failed')
        }
      }
      catch(err){
        res.status(300).json('Authentication Failed')
      }

}
module.exports={checkLogin};