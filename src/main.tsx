import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary';
import './index.css';
import { InitialProps } from './constants/interfaces.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong! Reload the page!</p>}>
      <App {...InitialProps} />
    </ErrorBoundary>
  </React.StrictMode>
);
