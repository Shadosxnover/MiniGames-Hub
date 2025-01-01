import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output.css';
import Home from './components/home';
import Minigame1 from './components/higher_or_lower';
import Minigame2 from './components/tic-tac-toe';
import Minigame3 from './components/typing-test';

function App() {
  return (
    <Router>
      <div>
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minigame1" element={<Minigame1 />} />
          <Route path="/minigame2" element={<Minigame2 />} />
          <Route path="/minigame3" element={<Minigame3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
