import { combineReducers } from "redux";
import { roleReducer } from "./role/roleReducer";



export default combineReducers({
    role: roleReducer
});
