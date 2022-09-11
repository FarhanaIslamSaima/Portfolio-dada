import axios from 'axios'
import * as action from '../constants/UserConstants.js'
const url="http://localhost:8000"

export const UserAuth=()=>async(dispatch)=>{
    try{
  const {data}=await axios.get(`${url}/find/all`,{
    headers:{
        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjNkZDIzZDkzYzYwMWZhNjdhYzgyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTI0MTA2MywiZXhwIjoxNjYxNjczMDYzfQ.G3Vz-yf46-8j6G4VyXxQGqIwSwvuKzu5tIeY6jyTM_8"
    }
  })
  console.log(data)
  dispatch({type:action.LOGIN_SUCCESS,payload:data})

    }
    catch(error){
        dispatch({type:action.LOGIN_FAILED,payload:error})

    }

}