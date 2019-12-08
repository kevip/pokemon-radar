import React from 'react';
import './Abilities.css';

export default function Ability(props) {
    const abilities = props.abilities.map( (ability, key) => {
        return (
            <p className="AbilityName" key={key} >{ability.name}</p>
        );
    });
    return (
        <div className="PokemonAbilities">            
            {abilities}
        </div>
    )
}
