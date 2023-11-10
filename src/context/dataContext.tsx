import { createContext} from 'react';
import { SearchContextData } from '../constants/interfaces';

export const SearchContext = createContext<SearchContextData>({
    infoData: [],
    searchRequest: '',
});



