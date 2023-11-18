import { combineReducers } from "redux";
import { dataReduser } from "./dataReducer";
import { characterReducer } from "./characterReducer";


export const rootReducer = combineReducers({
    data: dataReduser,
    character: characterReducer
})

export type RootState = ReturnType<typeof rootReducer>