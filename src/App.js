// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Components
import Pokedex from './components/pokedex/Pokedex';
import AppNav from './components/appnav/AppNav';
function App() {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route path='/' Component={Pokedex} />
      </Routes>
    </Router>
  );
}

export default App;
