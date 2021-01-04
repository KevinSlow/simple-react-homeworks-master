import {initialStateType, Actions} from "../HW8";

export const homeWorkReducer = (state: Array<initialStateType>, action: Actions): Array<initialStateType> => {
    const copyArray = [...state];
    if (action.type === "sort") {{
            return copyArray.sort(function sortIncrease(a, b) {
                return action.payload === "up" ? a.name <= b.name ? -1 : 1 : a.name >= b.name ? -1 : 1;})
        }
    } else if (action.type === "check") {
        {
            return state.filter(st => st.age >= action.payload)
        }
    } else {
        return state
    }
};
