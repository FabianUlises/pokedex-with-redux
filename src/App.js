// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Components
import Pokegame from './components/pokegame/Pokegame';
import AppNav from './components/appnav/AppNav';
function App() {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route path='/' Component={Pokegame} />
      </Routes>
    </Router>
  );
}

export default App;
