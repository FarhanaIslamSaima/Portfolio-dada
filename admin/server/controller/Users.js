import express, { response } from 'express'
import User from '../Model/User_Model.js'






export const updateUser=async(req,res)=>{
    if(req.user.id===req.params.id || req.user.isAdmin){
        if(req.user.password){
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
              ).toString();
    
        }
    
        try{
            const updateUser=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {
                new:true
            }
            )
            res.status(200).json(updateUser)
    
        }
        catch(error){
            res.status(403).json("You can only update your account")
            console.log(error)
    
        }
    }

}

export const deleteUser=async(req,res)=>{
    try{
        if (req.user.id === req.params.id || req.user.isAdmin) {
            try {
              await User.findByIdAndDelete(req.params.id);
              res.status(200).json("User has been deleted...");
            } catch (err) {
              res.status(500).json(err);
            }
          } else {
            res.status(403).json("You can delete only your account!");
          }

    }
    catch(error){
        response.status(500).json("You are not authenticated")
    }
}




export const getAll=async(req,res)=>{
    const query=req.query.new 
    if(req.user.isAdmin){
        try{
            const users=await User.find()
            res.status(200).json(users)

        }
        catch(error){
            res.status(500).json(error)
            console.log(error)
        }





    }
    else{
        res.status(403).json("You are not allowed to see all the user")
    
    }
   

}




