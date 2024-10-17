import React from 'react';
import './output.css';
import Home from './home';
import Minigame1 from './higher_or_lower';
import Minigame2 from './tic-tac-toe';
import Minigame3 from './typing-test';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* The Outlet will render child routes */}
      <Outlet />
    </div>
  );
}

export default App;
