import blogModel from "../Models/blogModel.js"
export const createPost=async(request,response)=>{
    try{
        const newBlogmodel=new blogModel(request.body)
        newBlogmodel.save()
        response.status(200).json(request.body)
        console.log(request.body)

    }
    catch(error){
        response.status(500).json(error)

    }
}

export const getPost=async(request,response)=>{
    try{
        const data=await blogModel.find({})
        response.status(200).json(data)

    }
    catch(error){
        response.status(500).json(error)
        console.log(error)
        
    }
}