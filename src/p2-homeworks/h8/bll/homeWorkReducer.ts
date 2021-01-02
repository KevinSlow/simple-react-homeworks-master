import {initialStateType, Actions} from "../HW8";

export const homeWorkReducer = (state: Array<initialStateType>, action: Actions): Array<initialStateType> => {
    switch (action.type) {
        case "sort": {
            return [...action.payload]
        }
        case "check": {
            return [...action.payload]
        }
        default:
            return state
    }
};
