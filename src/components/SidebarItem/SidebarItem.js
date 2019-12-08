import React from 'react'
import './SidebarItem.css';

export default function SidebarItem(props) {
    return (
        <div className="SidebarItem" onClick={() => props.click(props.id)}>
            <p className="Name">{props.name}</p>
            <img className="PokemonPreview" src={props.sprites.front_default} alt=""/>
        </div>
    )
}
