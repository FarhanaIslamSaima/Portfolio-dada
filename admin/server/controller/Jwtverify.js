import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;


export const Verify=(req,res,next)=>{
    const authHeader=req.headers.token
    if(authHeader){
        const token=authHeader.split(" ")[1]
   
    verify(token,process.env.SECRET_KEY,(error,user)=>{
        if (error) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    })
}
    else{
        return res.status(401).json("You are not authenticated")
    }


}