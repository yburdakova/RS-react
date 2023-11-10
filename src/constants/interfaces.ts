import React, { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ErrorButtonProps {
  onClick: () => void;
}


export interface CharacterProps {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
}

export interface AppProps {
  data: CharacterProps[];
  loading: boolean;
  searchValue: string;
  searchRequest: string;
  isError?: boolean;
}

export interface SearchBarProps {
  onSubmit: (event: React.FormEvent) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface SelectBarProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
}


export interface InfoItemProps {
  title: string;
  infodata: string | undefined;
}

export interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

export type InitialStateType = {
  dataInfo: CharacterProps[][];
  searchRequest: string;
}

export type Action =
  | { type: 'SET_DATA_INFO'; payload: CharacterProps[][] }
  | { type: 'SET_SEARCH_REQUEST'; payload: string };

export type AppContextType = InitialStateType & {
  dispatch: React.Dispatch<Action>;
};

export type AppContextProviderProps = {
  children: ReactNode;
};

export interface SearchContextData {
  infoData: CharacterProps[][] | [];
  searchRequest: string; 
}