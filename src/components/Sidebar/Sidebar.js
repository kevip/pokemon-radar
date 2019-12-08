import React from 'react'
import SidebarItem from '../SidebarItem/SidebarItem';
import './Sidebar.css';

export default function Sidebar(props) {
    const pokemons = props.pokemons || [];    
    const Items = pokemons.map( (pokemon, key) => 
        <SidebarItem 
            click={props.selectPokemon}
            name={pokemon.name} 
            id={pokemon.id} 
            sprites={pokemon.sprites} 
            key={key}/>
    );

    return (
        <div className="Sidebar">            
            {Items}
        </div>
    )
}
