export type initStateType = {
    loading: boolean
}

const initState = {
    loading: false
};

const SET_CRUTILKA = "SET_CRUTILKA"

type loadingReducerTypeAction = {
    type: typeof SET_CRUTILKA,
    loading: boolean
}

export const loadingReducer = (state: initStateType = initState, action: loadingReducerTypeAction): initStateType => { // fix any
    switch (action.type) {
        case SET_CRUTILKA: {
            return {...state, loading: action.loading};
        }

        default:
            return state;
    }
};
type loadingACType = {
    type: typeof SET_CRUTILKA,
    loading: boolean
}

export const loadingAC = (loading: boolean):loadingACType => ({
    type: SET_CRUTILKA,
    loading,
});