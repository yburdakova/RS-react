import { createContext, useReducer, ReactNode } from 'react';
import { Action, InitialStateType } from '../constants/interfaces';
import { reducer } from './reducer';

const initialState = {
    dataInfo: [],
    searchRequest: '',
}

type AppContextType = InitialStateType & {
    dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
    children: ReactNode;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
