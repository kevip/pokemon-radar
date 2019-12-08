import React, { Component, Suspense } from 'react';
// import axios from 'axios';
import { Route,Redirect, Switch } from 'react-router-dom';

import './Web.css';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

const Pokemons = React.lazy( () => import('./Pokemons/Pokemons'));
const Radar = React.lazy( () => import('./Radar/Radar'));

class Web extends Component {
    render () {
        return (
            <div className="Web">
                <Header />               
                <Switch>
                    <Route 
                        path="/pokemons" 
                        exact 
                        render={()=> (
                            <Suspense fallback={<Loader />}>
                                <Pokemons />
                            </Suspense>
                        )} />                    
                    <Route 
                        path="/map"                         
                        render={()=> (
                            <Suspense fallback={<Loader />}>
                                <Radar />
                            </Suspense>
                        )} />
                    <Route render={()=> <h1>Not Found</h1>}/>
                    <Redirect from="/" to="pokemons" />
                </Switch>
            </div>
        );
    }
}

export default Web;