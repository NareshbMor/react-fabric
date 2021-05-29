import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

const rootReducers = combineReducers({
    userDetail: loginReducer
})

export default rootReducers