import { createSlice } from "@reduxjs/toolkit";
import {  CharacterState } from "../../types/character";

const initialState: CharacterState = {
    data: {
        id: 0,
        name: "",
        species: "",
        gender: "",
        image: "",
    },
    currentId: null,
    loading: false,
    isShown: false,
    error: null
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers:{

    }
})

export default characterSlice.reducer;