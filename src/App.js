import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Pokemons from './containers/web/Pokemons/Pokemons';
import Header from './components/Header/Header';
import Web from './containers/web/Web';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}      
      {/* <Header />
      <Pokemons /> */}
      <Web />
    </div>
    </BrowserRouter>
  );
}

export default App;
