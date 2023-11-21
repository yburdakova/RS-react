import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataState, IData } from "../../types/data";

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

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        dataFetching(state){
            state.loading = true;
        },
        dataFetchingSuccess(state, action: PayloadAction<IData>){
            state.loading = false;
            state.error = '';
            state.data = action.payload
        },
        dataFetchingErrorr(state, action: PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        },
        setDataPages(state, action: PayloadAction<number>){
            state.pages = action.payload
        },
        setSearchRequest(state, action:PayloadAction<string>){
            state.searchQuery = action.payload
        },
        setLimit (state, action: PayloadAction<number>){
            state.limit = action.payload
        },
        setPage (state, action: PayloadAction<number>){
            state.page = action.payload
        }
    }
})

export default dataSlice.reducer;