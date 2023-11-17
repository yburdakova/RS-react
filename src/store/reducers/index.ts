import { combineReducers } from "redux";
import { dataReduser } from "./dataReducer";


export const rootReducer = combineReducers({
    data: dataReduser,
})