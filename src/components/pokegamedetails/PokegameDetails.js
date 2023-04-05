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
            console.log(id)
            // Fetching data from api
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokeDetails(res.data);
        };
        fetchData();
    }, [])

    return (
        <div>PokegameDetails</div>
    );
};

export default PokegameDetails;