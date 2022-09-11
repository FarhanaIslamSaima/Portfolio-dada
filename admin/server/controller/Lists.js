import List from "../Model/List_Model.js"

export const addlist=async(req,res)=>{
    console.log(req.user.isAdmin)
    if(req.user.isAdmin){
        const newList=new List(req.body)
        try{
            const savedList=await newList.save()
            res.status(201).json(savedList)
            


        }
        catch(error){
            res.status(500).json(error)
            console.log(error)
        }

    }
    else{
        res.status(403).json("You are not allowed")
    }

}

export const DeleteList=async(req,res)=>{
    if(req.user.isAdmin){
        try{
            await List.findByIdAndDelete(req.params.id)
            res.status(201).json("List has been deletd")
        }
        catch(error){
            res.status(500).json("error")
        }

    }
    else{
        res.status(403).json("You are not allowed")
    }
}

export const getList=async(req,res)=>{
    const typeQuery=req.query.type
    const genreQuery=req.query.genre
    let list=[]

    try{
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    {$sample:{size:5}},
                    {$match :{ type:typeQuery,genre:genreQuery}}
                ])
            }
            else{
                list= await List.aggregate([
                    {$sample:{size:5}},
                    {$match:{type:typeQuery}}
                ])
            }
        }
        else{
            list =await List.aggregate([{$sample:{size:5}}])
        }
        res.status(200).json(list)
        console.log(list)

    }
    catch(error){
        res.status(500).json(error)
        console.log(error)
    }


}