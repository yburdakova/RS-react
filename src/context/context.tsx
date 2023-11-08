import { createContext, useReducer } from 'react';
import { AppContextProviderProps, AppContextType } from '../constants/interfaces';
import { reducer } from './reducer';


const initialState = {
    dataInfo: [[]],
    searchRequest: '',
}

export const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
