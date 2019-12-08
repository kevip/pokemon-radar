import React from 'react';
import './Gallery.css';

export default function Gallery(props) {
    let images = [];
    for(let key in props.sprites) {
        images.push({alt: key, url: props.sprites[key]})
    }
    
    images = images.filter(img => img.url!==null);
    
    return (
        <div className="PokemonGallery">
            {images.map( (img, key) => 
                <img className="GalleryItem" src={img.url} alt={img.alt} key={key}/>
            )}
        </div>
    )
}
