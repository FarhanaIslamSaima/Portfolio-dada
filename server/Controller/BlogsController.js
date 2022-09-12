
export const createPost=async(request,response)=>{
    try{
        response.status(200).json(request.body)
        console.log(request.body)

    }
    catch(error){
        response.status(500).json(error)

    }
}