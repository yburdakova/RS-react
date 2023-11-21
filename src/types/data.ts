import { ICharacter } from "./character";

export interface IData {
    info: {
        count: number;
        pages: number;
        next?: string;
        prev?: string;
    };
    results: ICharacter[];
}

export interface DataState {
    data: IData;
    characterData?: ICharacter;
    loading: boolean;
    pages: number;
    limit: number;
    page: number;
    searchQuery: string;
    error: null | string;
}
