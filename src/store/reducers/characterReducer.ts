import {  CharacterAction, CharacterActionTypes, CharacterState } from "../../types/character";

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

export const characterReducer = (state = initialState, action: CharacterAction): CharacterState => {
    switch (action.type) {
        case CharacterActionTypes.FETCH_CHARACTER:
            return {...state, loading: true}
        case CharacterActionTypes.FETCH_CHARACTER_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case CharacterActionTypes.FETCH_CHARACTER_ERROR:
            return {...state, loading: false, error: action.payload}
        case CharacterActionTypes.SET_CHARACTER_ID:
            return {...state, currentId: action.payload}
            case CharacterActionTypes.SET_CHARACTER_SHOW:
            return {...state, isShown: action.payload}
        default:
            return state
    }
}