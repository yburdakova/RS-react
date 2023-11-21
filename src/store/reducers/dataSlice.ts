import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../types/data";

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

    }
})

export default dataSlice.reducer;