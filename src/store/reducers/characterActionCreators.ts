
import { AppDispatch } from "../../types/redux";
import {characterSlice} from "./characterSlice";

export const fetchCharacter = ( id: number = 0 ) => async (dispatch: AppDispatch) => {
    try {
        dispatch(characterSlice.actions.setIsShown(false))
        dispatch(characterSlice.actions.characterFetching())
        const url = `https://rickandmortyapi.com/api/character/${id}`
        const response = await fetch(url);
        const result = await response.json();
        dispatch(characterSlice.actions.characterFetchingSuccess(result))
        dispatch(characterSlice.actions.setIsShown(true))
    } catch (error) {
        dispatch(characterSlice.actions.characterFetchingErrorr("There was an error fetching data"))
    }
}

export const setId = (id: number) => (dispatch: AppDispatch) =>{
    dispatch(characterSlice.actions.setIsShown(false))
    return dispatch(characterSlice.actions.setCharacterId(id))
    
};

export const setIsShown = (toggler: boolean) => (dispatch: AppDispatch) => {
    return dispatch(characterSlice.actions.setIsShown(toggler))
};
