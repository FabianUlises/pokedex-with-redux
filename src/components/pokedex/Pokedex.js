// Dependencies
import React, { useEffect } from 'react';
import axios from 'axios';

const Pokedex = () => {
  // Useeffect
  useEffect(() => {
    // test cl
    console.log('hello there');
    // Fetching pokemon api
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=400')
      .then(res => res.statusText === 'OK' ? console.log('success', res.data) : console.log('err', res))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>Pokedex</div>
  );
};

export default Pokedex;