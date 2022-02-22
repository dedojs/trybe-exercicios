import React from "react";
import "./App.css";
import Pokedex from "./Pokedex";
import pokeName from './img/PikPng.com_pokemon-transparent-png_5867573.png';

class App extends React.Component {
  render() {
    return (
      <div className="App nav">
        <div>
          <img className="poke" src={pokeName} alt= 'pokemon name'/>
        </div>
        <Pokedex />
      </div>
    );
  }
}

export default App;
