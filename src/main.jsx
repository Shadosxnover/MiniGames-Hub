import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './home';
import Minigame1 from './higher_or_lower';
import Minigame2 from './tic-tac-toe';
import Minigame3 from './typing-test';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/minigames-app/",
    element: <App />,
    children: [
      {
        path: "/minigames-app/",
        element: <Home />,
      },
      {
        path: "minigame1",
        element: <Minigame1 />,
      },
      {
        path: "minigame2",
        element: <Minigame2 />,
      },
      {
        path: "minigame3",
        element: <Minigame3 />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
