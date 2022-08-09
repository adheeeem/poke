import React, { Component } from 'react';

const PokeCard = ({data}) => {
    return (
        <div className="card">
            <h1 id='name'>{data.name[0].toUpperCase()+data.name.slice(1)}</h1>
            <div className='stats'>
                {
                    data.stats.map((e)=> {
                        return <h1 id='powers'>{e.stat.name.toUpperCase()}: <span>{e.base_stat}</span></h1>        
                    })
                }
            </div>
            <img src={data.sprites.other.dream_world.front_default} alt="" width="150px"/>
            <h1 id='type'>Type: <span>{data.types[0].type.name}</span></h1>
        </div>
    );
}
 
export default PokeCard;