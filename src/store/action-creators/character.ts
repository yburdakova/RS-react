import { Dispatch } from "redux";
import type {} from 'redux-thunk/extend-redux';
import { CharacterAction, CharacterActionTypes } from "../../types/character";

export const fetchCharacter = (currentId: number = 1) => {
    console.log("WE ARE SEARCHING character: " + currentId)
    return async (dispatch: Dispatch<CharacterAction>)=> {
        try {
            dispatch({type: CharacterActionTypes.FETCH_CHARACTER})
            const url = `https://rickandmortyapi.com/api/character/${currentId}`
            const response = await fetch(url);
            const result = await response.json();
            console.log(result)
            dispatch({type: CharacterActionTypes.FETCH_CHARACTER_SUCCESS, payload: result})
            dispatch({type: CharacterActionTypes.SET_CHARACTER_SHOW, payload: true})
        } catch (error) {
            dispatch({
                type: CharacterActionTypes.FETCH_CHARACTER_ERROR, 
                payload: `There was an error fetching character by${currentId}`
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

export const setIsShown = (toggler: boolean): CharacterAction => {
    return {
        type: CharacterActionTypes.SET_CHARACTER_SHOW,
        payload: toggler
    };
};

