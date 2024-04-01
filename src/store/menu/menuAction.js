import { SELECT_MENU } from "../actionTypes"

export const selectMenu =(menu)=> (dispatch) =>{
    dispatch({
        type:SELECT_MENU,
        data: menu
    })
}