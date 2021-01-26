import { reducers } from "../../h10/bll/store";

type RootReducerType = typeof reducers; // (globalstate: AppStateType) => AppStateType
export type AppState = ReturnType<RootReducerType>;