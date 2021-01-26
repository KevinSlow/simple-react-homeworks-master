import { COLORS } from './colors'

const {BLUE, BLACK, GREEN} = COLORS;

export const chooseGreen = () => {
    return {
        type: GREEN
    }
}

export const chooseBlue = () => {
    return {
        type: BLUE
    }
}

export const chooseBlack = () => {
    return {
        type: BLACK
    }
}