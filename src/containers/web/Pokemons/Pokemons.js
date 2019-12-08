import React, { Component } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/Header/Header';
import PokemonInfo from '../../../components/PokemonInfo/PokemonInfo';
import Loader from '../../../components/Loader/Loader';
import './Pokemons.css'
import { connect } from 'react-redux'
import pokemonActions from '../../../actions/pokemons'
import { bindActionCreators } from 'redux';
// import { URLSearchParams } from 'url';

export class Pokemons extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const query = new URLSearchParams(this.props.location.search);
        // console.log(query);
        // for (let param of query.entries()) {
        //     console.log(param); // yields ['start', '5']
        // }
        this.props.pokemonActions.loadPokemons();
    }

    selectPokemon (id) {
        this.props.pokemonActions.loadPokemon(id);
    }

    render() {
        console.log("loading in render: ", this.props.loading);
        return (
            <div className="Pokemons">
                
                <PokemonInfo selectedPokemon={this.props.selectedPokemon} />
                <Sidebar selectPokemon={this.selectPokemon.bind(this)} pokemons={this.props.pokemons} />
                {this.props.loading ? <Loader /> : null}                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
        pokemons: state.pokemons.pokemons,
        loading: state.pokemons.loading,
        selectedPokemon: state.pokemons.selectedPokemon
});

const mapDispatchToProps = (dispatch) => ({
    pokemonActions: bindActionCreators(pokemonActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons)