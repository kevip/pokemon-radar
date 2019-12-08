import React from 'react'

export default function Types(props) {
    const types = props.types.map( (type, key) => <p className="TypeName" key={key} >{type.name}</p>);
    return (
        <div className="PokemonTypes">            
            {types}
        </div>
    )
}
