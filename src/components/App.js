import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Games from '../pages/Games';
import GameSelector from '../components/GameSelector';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameName" element={<GameSelector />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;