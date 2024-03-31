import { REMOVE_ROLE_TYPE, SET_ROLE_TYPE } from "../actionTypes"

export const setRole = (role) => async (dispatch) => {
    dispatch({
        type: SET_ROLE_TYPE,
        payload: role
    })
}

export const removeRole = (role) => async (dispatch) => {
    dispatch({
        type: REMOVE_ROLE_TYPE,
        payload: role
    })
}