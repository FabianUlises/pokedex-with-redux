// Dependencies
import React, { useEffect, useState } from 'react';
// Components
import PokeCard from '../pokecard/Pokecard';
const Pokedex = (props) => {
// Destructurin from props
const {pokemon, id} = props;
  // Mapping through state data to display pokemon
  let displayPokemon = pokemon ? pokemon.map((item) => (
    <PokeCard name={item.name} id={item.id} />
  )) : 'LOADING ....';
  return (
    <div>Pokedex
      {displayPokemon}
    </div>
  );
};

export default Pokedex;