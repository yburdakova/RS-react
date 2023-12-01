
import { createBrowserRouter } from 'react-router-dom';
import { ControllableForm, Home, NoPage, UncontrollableForm } from '../pages';
import App from '../App';

const routes = [
  {
    path: '/',
    element: <App />,
    
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'uncontrollable-form',
        element: <UncontrollableForm />,
      },
      {
        path: 'controllable-form',
        element: <ControllableForm />,
      },
      {
        path: '*',
        element: <NoPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: '/',
});
export default router;