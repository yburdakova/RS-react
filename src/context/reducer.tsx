import { Reducer } from 'react';
import { Action, InitialStateType } from '../constants/interfaces';


enum ActionTypes {
  SET_DATA_INFO = 'SET_DATA_INFO',
  SET_SEARCH_REQUEST = 'SET_SEARCH_REQUEST',
}


export const reducer: Reducer<InitialStateType, Action> = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_DATA_INFO:
            return { ...state, dataInfo: action.payload };
        case ActionTypes.SET_SEARCH_REQUEST:
            return { ...state, searchRequest: action.payload };
        default:
            return state;
    }
};

