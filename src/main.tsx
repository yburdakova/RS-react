import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary';
import './index.css';
import { InitialProps } from './types/interfaces.ts';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong! Reload the page!</p>}>
      <BrowserRouter >
        <Provider store={store}>
          <App {...InitialProps} />
        </Provider>
      </BrowserRouter >
    </ErrorBoundary>
  </React.StrictMode>
);
