import React from 'react';
import { useState } from 'react';
import NotFound from './NotFound';
import PokeCard from './PokeCard';

const Main = () => {
    const [pokemon, setPokemon] = useState([])
    const [pokename, setPokename] = useState('pikachu')
    const [loading, setLoading] = useState(true)
    const [notfound, setNotfound] = useState(false)

    const getPokemons = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
        .then(res => res.json())
        .then(data => {
            setPokemon(data)
            setNotfound(false)
            setLoading(false)
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        }) 
        
        //console.log(pokemons.sprites.back_default);
    }
    // useEffect(()=>{
    //     
    // }, [])

    const handleChange = (e) => {
        setPokename(e.target.value.toLowerCase())
    }

    const findPoke = () => {
        getPokemons()
        setNotfound(true)
    }

    return ( 
        <div className="container">
            <h1>Find Your favourite <span id='poke'>Pokémon</span></h1>
            <div className='search'>
                <input type="text" onChange={handleChange} placeholder="Type any pokemon name"/>
                <button onClick={findPoke}>Find!</button>
            </div>
            {notfound && <NotFound />}
            {!notfound && loading===false && <PokeCard data={pokemon}/>}
        </div>
    );
}
 
export default Main;