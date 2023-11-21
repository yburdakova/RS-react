import { combineReducers } from "@reduxjs/toolkit";
import characterReducer from './characterSlice'
import dataReducer from './dataSlice'


export const rootReducer = combineReducers({
    characterReducer,
    dataReducer
})

export type RootState = ReturnType<typeof rootReducer>