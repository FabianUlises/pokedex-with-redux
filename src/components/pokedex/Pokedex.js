// Dependencies
import React, { useEffect, useState } from 'react';
// Components
import PokeCard from '../pokecard/Pokecard';
import { Link } from 'react-router-dom';
const Pokedex = (props) => {
  // Destructurin from props
  const {pokemon} = props;
    // Mapping through state data to display pokemon
    let displayPokemon = pokemon ? pokemon.map((item, i) => (
      <Link key={i} to={`/pokemon/${item.id}`}>
        <PokeCard name={item.name} id={item.id} />
      </Link>
    )) : 'LOADING ....';
    return (
      <div>Pokedex
        {displayPokemon}
      </div>
  );
};

export default Pokedex; 