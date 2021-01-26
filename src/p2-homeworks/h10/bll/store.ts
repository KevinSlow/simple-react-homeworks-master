import {loadingReducer} from "./loadingReducer";
import {combineReducers, createStore} from "redux";
import { colorReducer } from "../../h12/bll/reducers/themeReducer";

export const reducers = combineReducers({
    loading: loadingReducer,
    colors: colorReducer
});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev