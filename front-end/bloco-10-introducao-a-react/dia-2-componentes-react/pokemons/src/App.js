import React from "react";
import "./App.css";
import Pokedex from "./Pokedex";

class App extends React.Component {
  render() {
    return (
      <div className="App nav">
        <h1 className="App">Pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
