// Dependencies
import React from 'react';
const POKEMON_IMG_API = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/';
const PokeCard = (props) => {
    // Destructuring from props
    const {name, id} = props;
    let imgSrc = `${POKEMON_IMG_API}${id}.svg`;
    return (
        <div className='pokecard'>
            <h2>{name}</h2>
            <img src={imgSrc} alt={name} />
        </div>
      );
};

export default PokeCard;