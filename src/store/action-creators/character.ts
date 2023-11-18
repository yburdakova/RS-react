import { Dispatch } from "redux";
import type {} from 'redux-thunk/extend-redux';
import { CharacterAction, CharacterActionTypes } from "../../types/character";

export const fetchCharacter = (id: number = 0) => {

    return async (dispatch: Dispatch<CharacterAction>)=> {
        try {
            dispatch({type: CharacterActionTypes.FETCH_CHARACTER})
            console.log("WE ARE SEARCHING character: " + id)
            const url = `https://rickandmortyapi.com/api/character/${id}`
            const response = await fetch(url);
            const result = await response.json();
            console.log(result)
            console.log(result.info.pages)
            dispatch({type: CharacterActionTypes.FETCH_CHARACTER_SUCCESS, payload: result})
        } catch (error) {
            dispatch({
                type: CharacterActionTypes.FETCH_CHARACTER_ERROR, 
                payload: "There was an error fetching data"
            })
        }
    }
}

export const setId = (id: number): CharacterAction => {
    return {
        type: CharacterActionTypes.SET_CHARACTER_ID,
        payload: id
    };
};

