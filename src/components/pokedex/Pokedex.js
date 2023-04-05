// Dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokedex = () => {
  // State
  const [pokemon, setPokemon] = useState(null);
  // Useeffect
  useEffect(() => {
    // test cl
    console.log('hello there');
    // Fetching pokemon api
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=8')
      .then(res => {
        if(res.statusText === 'OK'){
         const {results} = res.data;
         let newPokemon = [];
         results.forEach((item, i) => {
          i++;
          let pokemonObj = {
            id: i,
            name: item.name
          };
          newPokemon.push(pokemonObj);
         })
         setPokemon(newPokemon);
        }
      })

  }, []);
  let displayPokemon = pokemon ? pokemon.map((item) => (
    `${item.name}`
  )) : 'LOADING ....';
  return (
    <div>Pokedex
      {displayPokemon}
    </div>
  );
};

export default Pokedex;