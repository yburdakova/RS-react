import { dataSlice } from "./dataSlice";
import { AppDispatch } from "../../types/redux";

export const fetchData = (searchQuery: string = '', page: number = 1) => async (dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.dataFetching())
        const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
        const response = await fetch(url);
        const result = await response.json();
        dispatch(dataSlice.actions.dataFetchingSuccess(result))
        dispatch(dataSlice.actions.setDataPages(result.info.pages))
        return result
    } catch (error) {
        dispatch(dataSlice.actions.dataFetchingErrorr("There was an error fetching data"))
    }
}

export const setSearchRequest = ( searchQuery: string ) => (dispatch: AppDispatch) => {
    return dispatch(dataSlice.actions.setSearchRequest(searchQuery))
}

export const setLimit = (limit: number) => (dispatch: AppDispatch) =>{
    return dispatch(dataSlice.actions.setLimit(limit))
};

export const setPage = (page: number) => (dispatch: AppDispatch) =>{
    return dispatch(dataSlice.actions.setPage(page))
};

