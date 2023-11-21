import { combineReducers } from "@reduxjs/toolkit";
import characterReducer from './characterSlice'


export const rootReducer = combineReducers({

    characterReducer
})

export type RootState = ReturnType<typeof rootReducer>