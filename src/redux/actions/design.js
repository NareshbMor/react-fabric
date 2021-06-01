const { actionType } = require("../constants/types");

export const addCircle = (data) => {
    return {
        type: actionType.ADD_CIRCLE,
        payload: data
    }
}

export const addRectangle = (data) => {
    return {
        type: actionType.ADD_RECTANGLE,
        payload: data
    }
}

export const addLine = (data) => {
    return {
        type: actionType.ADD_LINE,
        payload: data
    }
}
export const clearAll = () => {
    return {
        type: actionType.CLEAR_ALL
    }
}
