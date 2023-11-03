import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary';
import ErrorPage from './pages/ErrorPage.tsx';
import './index.css';
import { InitialProps } from './constants/interfaces.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App {...InitialProps} />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong! Reload the page!</p>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
