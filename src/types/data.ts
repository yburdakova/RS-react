export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface Data {
    info: {
        count: number;
        pages: number;
        next?: string;
        prev?: string;
    };
    results: Character[];
}

export interface DataState {
    data: Data;
    loading: boolean;
    pages?: number;
    limit?: number;
    page?: number;
    searchQuery?: string;
    error: null | string;
}

export enum DataActionTypes {
    FETCH_DATA = "FETCH_DATA",
    FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
    FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
    SET_DATA_PAGES = "SET_DATA_PAGES",
    SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
    SET_DATA_LIMIT = "SET_DATA_LIMIT",
    SET_CURRENT_PAGE = "SET_DATA_PAGE"
}
interface FetchDataAction {
    type: DataActionTypes.FETCH_DATA;
}

interface FetchDataSuccessAction {
    type: DataActionTypes.FETCH_DATA_SUCCESS;
    payload: Data
}

interface FetchDataErrorAction{
    type: DataActionTypes.FETCH_DATA_ERROR;
    payload: string;
}

interface SetDataPagesAction{
    type: DataActionTypes.SET_DATA_PAGES;
    payload: number;
}

interface SetDataLimitAction{
    type: DataActionTypes.SET_DATA_LIMIT;
    payload: number;
}

interface SetCurrentPageAction{
    type: DataActionTypes.SET_CURRENT_PAGE;
    payload: number;
}

interface SetSearchQueryAction{
    type: DataActionTypes.SET_SEARCH_QUERY;
    payload: string;
}

export type DataAction = 
    FetchDataAction 
    | FetchDataSuccessAction 
    | FetchDataErrorAction 
    | SetDataPagesAction
    | SetSearchQueryAction
    | SetDataLimitAction
    | SetCurrentPageAction