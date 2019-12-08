import { combineReducers } from "redux";
import pokemons from "./pokemons/pokemonReducer"
import { CLEAR_STATE } from "../actions/actionTypes";
import initialState from "./initialState";

const appReducer = combineReducers({
    pokemons
})

const reducer = (state, action) => {
    if (action.type === CLEAR_STATE) {
        state = initialState;
    }

    return appReducer(state, action);
}


export default reducer;