import React from 'react';
import './Loader.css';

function Loader() {
    return (
        <div className="PokemonLoader">
            {/* <h1 className="LoadingText">Loading...</h1> */}
            <img src="https://gifimage.net/wp-content/uploads/2018/11/pixel-loading-gif-2.gif" alt="loader"/>
        </div>
    )
}

export default Loader
