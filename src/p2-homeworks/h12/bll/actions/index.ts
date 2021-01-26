import { COLORS } from './colors'

const {BLUE, BLACK, GREEN} = COLORS;

export const actions = {
    chooseGreen: () => {
        return {
            type: GREEN
        } as const
    },
    chooseBlue: () => {
        return {
            type: BLUE
        }as const
    },
    chooseBlack: () => {
        return {
            type: BLACK
        }as const
    }
}