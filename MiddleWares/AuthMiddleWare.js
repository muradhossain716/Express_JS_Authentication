const jwt = require("jsonwebtoken");

const checkLogin=async(req,res,next)=>{
    const { authorization }=req.headers;
    const token= authorization.split(' ')[1];
    await jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if(decoded){
            req.user_name=decoded.user_name
            req.user_id=decoded.user_id
            next()
        }
        else{
            next(err)
        }


      })

}
module.exports={checkLogin};