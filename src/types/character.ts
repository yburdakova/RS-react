export interface Character {
    id: number;
    name: string;
    status?: string;
    species: string;
    type?: string;
    gender: string;
    origin?: {
        name: string;
        url: string;
    };
    location?: {
        name: string;
        url: string;
    };
    image: string;
    episode?: string[];
    url?: string;
    created?: string;
}

export interface CharacterState {
    data: Character;
    loading: boolean;
    currentId: null | number;
    error: null | string;
    isShown: boolean;
}

export enum CharacterActionTypes {
    FETCH_CHARACTER = "FETCH_CHARACTER",
    FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS",
    FETCH_CHARACTER_ERROR = "FETCH_CHARACTER_ERROR",
    SET_CHARACTER_ID = "SET_CHARACTER_ID",
    SET_CHARACTER_SHOW = "SET_CHARACTER_SHOW"
}

interface FetchCharacterAction {
    type: CharacterActionTypes.FETCH_CHARACTER;
}

interface FetchCharacterSuccessAction {
    type: CharacterActionTypes.FETCH_CHARACTER_SUCCESS;
    payload: Character
}

interface FetchCharacterErrorAction{
    type: CharacterActionTypes.FETCH_CHARACTER_ERROR;
    payload: string;
}

interface SetCharacterIDAction{
    type: CharacterActionTypes.SET_CHARACTER_ID;
    payload: number;
}

interface SetCharacterShownAction{
    type: CharacterActionTypes.SET_CHARACTER_SHOW;
    payload: boolean;
}

export type CharacterAction = 
    FetchCharacterAction 
    | FetchCharacterSuccessAction 
    | FetchCharacterErrorAction 
    | SetCharacterIDAction
    | SetCharacterShownAction
