// Dependencies
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Components
import Pokedex from './../pokedex/Pokedex';
const Pokegame = () => {
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
        //  Updating state with data from api
        setPokemon(newPokemon);
        }
      })

  }, []);
  return (
    <div className='game-container'>
        <Pokedex pokemon={pokemon} />
        <Pokedex pokemon={pokemon} />
    </div>
  )
}

export default Pokegame;