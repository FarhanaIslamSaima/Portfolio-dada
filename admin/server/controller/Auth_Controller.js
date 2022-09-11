
import User from "../Model/User_Model.js"
import  jwt from 'jsonwebtoken'
import CryptoJS from "crypto-js"
const { sign } = jwt




export const addUser=async(request,response)=>{
    const username=request.body.username
    const email=request.body.email
    console.log(process.env.SECRET_KEY)
    const password=CryptoJs.AES.encrypt(request.body.password,
        process.env.SECRET_KEY
        ).toString()
    try{
     const newUser=  new User({username,email,password})
    const user=  await newUser.save()
     response.status(200).json(user)
     console.log(user)
    }
    catch(error){
        response.status(500).json(error)
    }

}



export const login=async(request,response)=>{
    try{
        
        const user= await User.findOne({email:request.body.email})
        !user && response.status(401).json("Wrong password or username")
      
     
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        
      
  
    const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );
  
      const { password, ...info } = user._doc;
  
      response.status(500).json({...info,accessToken})
      console.log({...info,accessToken})




   

 
    }

   
    catch(error){
        response.status(500).json(error)
        console.log(error)
       

    }

}