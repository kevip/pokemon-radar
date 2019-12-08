import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default function pokemons(state= initialState.pokemons, action) {
    let newState;
    switch(action.type) {
        case types.LOAD_POKEMONS, types.LOAD_POKEMON:
            console.log("loading pokemon reducer...");
            newState = {
                ...state,
                loading: true
            }
            return newState;
        case types.LOAD_POKEMONS_SUCCEEDED:
            newState = {
                ...state,
                loading: false,
                pokemons: action.payload
            }
            return newState;
        case types.LOAD_POKEMON_SUCCEEDED:
            newState = {...state, loading: false,};
            newState.selectedPokemon = action.payload;
            return newState;
        case types.LOAD_POKEMON_FAILED:
            newState = {
                ...state,
                loading: false,
                selectedPokemon: action.payload
            }
            return newState;
        default:
            return state;
    }

}