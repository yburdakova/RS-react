import { DataAction, DataState, DataActionTypes } from "../../types/data";

const storedLimit = localStorage.getItem('limit');
const storedSearchQuery = localStorage.getItem('searchQuery');

const initialState: DataState = {
    data: {
        info: {
            count: 0,
            pages: 0,
            next: undefined,
            prev: undefined
        },
        results: []
    },
    pages: 0,
    page: 1,
    limit: storedLimit ? parseInt(storedLimit, 10) : 20,
    loading: false,
    searchQuery: storedSearchQuery || "",
    error: null
}

export const dataReduser = (state = initialState, action: DataAction): DataState => {
    switch (action.type) {
        case DataActionTypes.FETCH_DATA:
            return {...state, loading: true}
        case DataActionTypes.FETCH_DATA_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case DataActionTypes.FETCH_DATA_ERROR:
            return {...state, loading: false, error: action.payload}
        case DataActionTypes.SET_DATA_PAGES:
            return {...state, pages: action.payload}
        case DataActionTypes.SET_DATA_LIMIT:
            localStorage.setItem('limit', JSON.stringify(action.payload));
            return {...state, limit: action.payload}
        case DataActionTypes.SET_SEARCH_QUERY:
            localStorage.setItem('searchQuery', action.payload);
            console.log(state)
            return {...state, searchQuery: action.payload}
        case DataActionTypes.SET_CURRENT_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}