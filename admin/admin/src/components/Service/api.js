import axios from 'axios'

const url='http://localhost:8000'

export const createPost=async(data)=>{
    try{
        const response=await axios.post(`${url}/post/`,data)
        return response.data

    }
    catch(error){
        return error
        console.log(error)
    }

}
export const uploadFile=async(data)=>{
    try{
        const response=await axios.post(`${url}/upload/`,data)
        return response
        console.log(response)

    }
    catch(error){
        return error
    }

}
export const getBlogdata=async()=>{
    try{
        const response=await axios.get(`${url}/get/data`)
        return response

    }
    catch(error){

    }
}