import { SELECT_MENU } from "../actionTypes";

const initialState = {
    currentMenu: null,
    currentMenuName: null
}


export const menuReducer = (state = initialState , action) => {
    switch (action.type) {
        case SELECT_MENU:
            return {
                ...state,
                currentMenu: action.data.currentMenu,
                currentMenuName: action.data.currentMenuName
            }

        default:
            return state;
    }
}