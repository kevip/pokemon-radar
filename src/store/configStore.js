import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reducers';
import thunk from 'redux-thunk';

export const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configStore() {
    return createStore(
        reducer,
        composeEnhancer(applyMiddleware(thunk, sagaMiddleware))
    ) 
}