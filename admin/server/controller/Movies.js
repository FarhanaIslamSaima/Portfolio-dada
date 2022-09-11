import Movies from "../Model/MovieModel.js";

export const createMovie=async(req,res)=>{
    console.log(req.user.isAdmin)
    if (req.user.isAdmin){
        const newMovie=new Movies(req.body)
  
    try{
        const savedMovie=await newMovie.save()
        res.status(201).json(savedMovie)
        console.log(savedMovie)
        

    }
    catch(error){
        res.status(500).json(error)
    }
}
else{
    res.status(403).json("You are not allowed")
    console.log("Movie is not insterted")
}
}
export const updateMovie=async(req,res)=>{
    if(req.user.isAdmin){
        try{
            const updateMvi=await Movies.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{
                new:true
            })
            req.status(200).json(updateMvi)


        }
        catch(error){
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("You are not allowed")

    }
}

export const DelMovie=async(req,res)=>{
    if(req.user.isAdmin){
        try{
            await Movies.findByIdAndDelete(req.params.id)
            res.status(200).json("This movie has been deletd")

        }
        catch(error){
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("You are not allowed")
    }
}
export const getMovie=async(req,res)=>{
    try{
      const movie=await Movies.findById(req.params.id)
      res.status(200).json(movie)
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const getAny=async(req,res)=>{
    const type=req.query.type
    let movie
    try{
        if(type === "series"){
            movie =await Movies.aggregate([
                {$match:{isSeries:true}},
                {$sample:{ size :5}}
            ])
        }
        else{
            movie=await Movies.aggregate([
                {$match: {isSeries:false}},
                {$sample:{size:5}}
            ])
        }
        res.status(200).json(movie)


    }
    catch(error){
        res.status(500).json(error)
    }
}