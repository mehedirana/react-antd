import { REMOVE_ROLE_TYPE, SET_ROLE_TYPE } from "../actionTypes";

export const roleReducer=(state={role:null}, action)=>{
    switch(action.type){
        case SET_ROLE_TYPE:
            return{
                role : action?.payload?.toLowerCase()
            }
        case REMOVE_ROLE_TYPE:
            return{
                role : null
            }
    
        default:
           return state; 
    }
}