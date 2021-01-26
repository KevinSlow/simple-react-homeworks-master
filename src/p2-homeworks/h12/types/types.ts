import { reducers } from "../../h10/bll/store";
import { actions } from "../bll/actions";


type RootReducerType = typeof reducers;
export type StateType = ReturnType<RootReducerType>;
export type AppState = ReturnType<RootReducerType>;
export type ActionsType = InferActionsTypes<typeof actions>;
export type InferActionsTypes<T> = T extends {
        [keys: string]: (...args: any[]) => infer U;
    }
    ? U
    : never;