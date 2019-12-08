import config from '../../config/config'
import {POKEMON, POKEMONS} from '../endpoints'

export default class PokemonService {

    constructor() {}

    getPokemon(id) {
        return fetch(`${config.API_URL}/api/${POKEMON}/${id}`).then( res => res.json());
    }

    getPokemons() {
        return fetch(`${config.API_URL}/api/${POKEMONS}`).then( res => res.json());
    }
}