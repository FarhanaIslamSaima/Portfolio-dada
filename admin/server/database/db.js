import mongoose from 'mongoose'
const url='mongodb+srv://netflix:8HyYfle9L8zCbcpA@netflix.a7cgyrx.mongodb.net/?retryWrites=true&w=majority'
const connection =async()=>{
    
    try{
        await mongoose.connect(url)
        console.log('Database connected successfully')

    }
    catch(error){
        console.log(error)
    }
}
export default connection