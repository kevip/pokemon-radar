import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/images/pokemon-logo.png';

export default () => (
    <header className="Header">
        <nav className="Nav">
            <ul className="NavItems">
                <li className="NavItem">
                    <NavLink to="/pokemons" exact>Pokemons</NavLink>
                </li>
                <li className="NavItem">
                    <img className="Logo" src={logo} alt="logo"/>
                </li>
                <li className="NavItem">
                    <NavLink to="/map">Map</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);