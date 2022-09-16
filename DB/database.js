import mongoose from "mongoose";


const Connection=async()=>{
    const url='mongodb+srv://portfolioblog:codeforinterview@portfolioblog.ldizuar.mongodb.net/?retryWrites=true&w=majority'
try{
   await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
   console.log('Database connected successfully')

}
catch(error){
   console.log(error)
}
}
export default Connection