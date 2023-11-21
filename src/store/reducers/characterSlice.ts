import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  CharacterState, ICharacter } from "../../types/character";

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
        characterFetching(state){
            state.loading = true;
        },
        characterFetchingSuccess(state, action: PayloadAction<ICharacter>){
            state.loading = false;
            state.error = '';
            state.data = action.payload
        },
        characterFetchingErrorr(state, action: PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        },
        setCharacterId(state, action: PayloadAction<number>){
            state.currentId = action.payload
        },
        setIsShown(state, action: PayloadAction<boolean>){
            state.isShown = action.payload
        },
        resetCharacter(state, action: PayloadAction<ICharacter>){
            state.data = action.payload
        }

    }
})

export default characterSlice.reducer;