import { actionType } from "../constants/types";

const initialState = {
    user_name: 'Naresh Mor',
    user_email: '',
    is_login: 0
}
export const loginReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case actionType.USER_LOGIN:
            return { ...state, user_email: payload.userEmail, is_login: 1 }
        case actionType.USER_LOGOUT:
            return initialState
        default:
            return state
    }
}