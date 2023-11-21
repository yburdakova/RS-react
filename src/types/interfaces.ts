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

export const InitialProps = {
  data: [],
  loading: true,
  searchValue: '',
  searchRequest: '',
};


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
export interface CharactersInfoProps {
  pages: number;
  limit: number;
}