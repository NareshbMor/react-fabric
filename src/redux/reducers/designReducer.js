const { actionType } = require("../constants/types");

const initialState = {
    elements: []
};

export const designReducer = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
        case actionType.ADD_CIRCLE:
            return { ...state, elements: [...state.elements, payload] }
        case actionType.ADD_RECTANGLE:
            return { ...state, elements: [...state.elements, payload] }
        case actionType.ADD_LINE:
            return { ...state, elements: [...state.elements, payload] }
        case actionType.CLEAR_ALL:
            return initialState
        default:
            return state
    }
}