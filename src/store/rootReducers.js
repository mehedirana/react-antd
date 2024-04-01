import { combineReducers } from "redux";
import { roleReducer } from "./role/roleReducer";
import { menuReducer } from "./menu/menuReducer";



export default combineReducers({
    role: roleReducer,
    menu: menuReducer
});
