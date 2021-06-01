import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { designReducer } from "./designReducer";


const rootReducers = combineReducers({
    userDetail: loginReducer,
    designData: designReducer
})

export default rootReducers