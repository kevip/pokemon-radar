import { call, put, takeEvery, take } from 'redux-saga/effects';

//import { takeEvery } from "@redux-saga/core/effects";
import pokemonActions from "../../actions/pokemons";
import PokemonService from "../../services/Pokemon/PokemonService";

export function* loadPokemons() {
    console.log("loading pokemons...");
    const pokemonService = new PokemonService();
    try {
        const pokemons = yield call(pokemonService.getPokemons.bind(pokemonService));
        yield put(pokemonActions.loadPokemonsSucceeded(pokemons));
    } catch (err) {
        yield put(pokemonActions.loadPokemonsFailed(err));
    }
}

export function* loadPokemon(data) {
    const pokemonService = new PokemonService();
    try {
        const pokemon = yield call(pokemonService.getPokemon.bind(PokemonService), data.payload);
        yield put(pokemonActions.loadPokemonSucceeded(pokemon));
    } catch (err) {
        yield put(pokemonActions.loadPokemonFailed(err));
    }
}

export const pokemonSagas = [
    takeEvery(pokemonActions.loadPokemons().type, loadPokemons),
    takeEvery(pokemonActions.loadPokemon().type, loadPokemon)
];