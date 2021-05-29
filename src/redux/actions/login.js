import { actionType } from './../constants/types'
export const LoginAction = (data) => {
    console.log("login action =>", data)
    return {
        type: actionType.USER_LOGIN,
        payload: data
    }
}

export const LogoutAction = () => {
    return {
        type: actionType.USER_LOGOUT
    }
}