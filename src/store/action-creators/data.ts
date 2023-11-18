import { Dispatch } from "redux";
import { DataAction, DataActionTypes } from "../../types/data";
import type {} from 'redux-thunk/extend-redux';

export const fetchData = (searchQuery: string = '', page: number = 1) => {

    return async (dispatch: Dispatch<DataAction>)=> {
        try {
            dispatch({type: DataActionTypes.FETCH_DATA})
            const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
            const response = await fetch(url);
            const result = await response.json();
            dispatch({type: DataActionTypes.FETCH_DATA_SUCCESS, payload: result})
            dispatch({type: DataActionTypes.SET_DATA_PAGES, payload: result.info.pages})
        } catch (error) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR, 
                payload: "There was an error fetching data"
            })
        }
    }
}

export const setSearchRequest = ( searchQuery: string ): DataAction => {
    return {
        type: DataActionTypes.SET_SEARCH_QUERY,
        payload: searchQuery
    };
};

export const setLimit = (limit: number): DataAction => {
    return {
        type: DataActionTypes.SET_DATA_LIMIT,
        payload: limit
    };
};

export const setPage = (page: number): DataAction => {
    return {
        type: DataActionTypes.SET_CURRENT_PAGE,
        payload: page
    };
};

