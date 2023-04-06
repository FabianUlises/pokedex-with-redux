// Dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokegameDetails = () => {
    // State
    const [pokeDetails, setPokeDetails] = useState({});
    // Getting params from url
    const {id} = useParams();
    // UseEffect
    useEffect(() => {
        const fetchData = async() => {
            try {
                console.log(id)
                // Fetching data from api
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokeDetails(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchData();
    }, [])
    const {name, sprites} = pokeDetails;
    console.log(Object.keys(pokeDetails).length)
    const pokeImg = Object.keys(pokeDetails).length > 0 ? <img src={sprites.front_default} alt={name} /> : 'no image';
    return (
        <div>PokegameDetails
            {name}
            {pokeImg}
        </div>
    );
};

export default PokegameDetails;