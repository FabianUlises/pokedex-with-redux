// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Components
import Pokegame from './components/pokegame/Pokegame';
import AppNav from './components/appnav/AppNav';
import PokegameDetails from './components/pokegamedetails/PokegameDetails'
function App() {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route exact path='/' Component={Pokegame} />
        <Route exact path='/pokemon/:id' Component={PokegameDetails} />
      </Routes>
    </Router>
  );
}

export default App;
