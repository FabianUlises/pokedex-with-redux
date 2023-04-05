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
        const fetchData = async() => {
            try {
                // Fetching pokemon api
                const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
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
                    });
                    setPokemon(newPokemon);
                }
            }catch(err) {
                console.log(err);
            }
        }
        fetchData();
  }, [])
  return (
    <div className='game-container'>
        <Pokedex pokemon={pokemon} />
        {/* <Pokedex pokemon={pokemon} /> */}
    </div>
  )
}

export default Pokegame;