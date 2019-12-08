import React from 'react'
import './PokeMarker.css'

export default function PokeMarker(props) {
    return (
        <figure className="PokeMarker">
            <img className="MarkerIcon" src={props.imageUrl} />
            <figcaption className="MarkerCaption">
                <h1 className="MarkerName">{props.text}</h1>
            </figcaption>
        </figure>
    )
}
