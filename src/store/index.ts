import {legacy_createStore} from 'redux'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";


export const  store = legacy_createStore({}, applyMiddleware(thunk))