import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary';
import './index.css';
import { InitialProps } from './constants/interfaces.ts';
import { BrowserRouter} from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong! Reload the page!</p>}>
      <BrowserRouter >
        <App {...InitialProps} />
      </BrowserRouter >
    </ErrorBoundary>
  </React.StrictMode>
);
