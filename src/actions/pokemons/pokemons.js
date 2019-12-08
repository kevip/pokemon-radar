import * as types from '../actionTypes';

export function loadPokemons(payload) {
    return { type: types.LOAD_POKEMONS, payload};
}

export function loadPokemonsSucceeded(payload) {
    return { type: types.LOAD_POKEMONS_SUCCEEDED, payload};
}

export function loadPokemonsFailed(payload) {
    return { type: types.LOAD_POKEMONS_FAILED, payload};
}

export function loadPokemon(payload) {
    return { type: types.LOAD_POKEMON, payload};
}

export function loadPokemonSucceeded(payload) {
    return { type: types.LOAD_POKEMON_SUCCEEDED, payload};
}

export function loadPokemonFailed(payload) {
    return { type: types.LOAD_POKEMON_FAILED, payload};
}