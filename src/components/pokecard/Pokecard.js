// Dependencies
import React from 'react';
const PokeCard = (props) => {
    // Destructuring from props
    const {name} = props;
  return (
    <div className='pokecard'>
        <h2>{name}</h2>
    </div>
  );
};

export default PokeCard;