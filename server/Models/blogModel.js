import mongoose from 'mongoose'

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    text:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
})
const blogModel= mongoose.model('blog',blogSchema)

export default blogModel
