import { COLORS } from '../actions/colors'

const INITIAL_STATE = {
    themeColor: null
}

const {BLUE, BLACK, GREEN} = COLORS;

export const colorReducer = (state = INITIAL_STATE, action:any) => {
    switch(action.type) {
        case BLUE:
            return {...state, themeColor: BLUE }
        case BLACK:
            return {...state, themeColor: BLACK }
        case GREEN:
            return {...state, themeColor: GREEN }
        default:
            return state;
    }
}