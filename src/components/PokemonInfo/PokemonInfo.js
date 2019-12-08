import React from 'react'
import './PokemonInfo.css';
import Abilities from './Abilities/Abilities';
import Gallery from './Gallery/Gallery';
import Types from './Types/Types';


export default function PokemonInfo(props) {

    const pokemonInfo = () => 
        <div className="PokemonInfo">             
            <h1 className="PokemonName">{props.selectedPokemon.name}</h1>
            <figure>
                <img className="PokemonMainPicture"src={props.selectedPokemon.sprites.front_default} alt={props.selectedPokemon.name}/>
            </figure>
            <h4 className="AbilitiesTitle">Abilities</h4>
            <Abilities abilities={props.selectedPokemon.abilities}/>
            <h4>Type</h4>
            <Types types={props.selectedPokemon.types} />            
            <Gallery sprites={props.selectedPokemon.sprites} />
        </div>    

    return props.selectedPokemon.name ? pokemonInfo() : <div className="PokemonInfo"></div>;
}
