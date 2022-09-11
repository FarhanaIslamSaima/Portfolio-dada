import * as actionType from "../constants/UserConstants.js"

export const UserReducer=(state={user:[]},action)=>{
    switch(action.type){
        case actionType.LOGIN_SUCCESS:
            return {user : action.payload}


            case actionType.LOGIN_FAILED:
                return { error: action.payload}
                
                default:
                    return state

    }


}