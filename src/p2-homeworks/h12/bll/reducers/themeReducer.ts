import { COLORS } from '../actions/colors'
import { ActionsType } from '../../types/types';

const INITIAL_STATE = {
    themeColor: ""
}

const {BLUE, BLACK, GREEN} = COLORS;


export const colorReducer = (state = INITIAL_STATE, action:ActionsType) => {
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