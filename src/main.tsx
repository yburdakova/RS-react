import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import { setupStore } from './store/index.ts';
import { Provider } from 'react-redux';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong! Reload the page!</p>}>
      <BrowserRouter >
        <Provider store={store}>
          <App  />
        </Provider>
      </BrowserRouter >
    </ErrorBoundary>
  </React.StrictMode>
);
