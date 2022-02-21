import React from "react";
import './App.css';
import Thisandblind from "./thisAndblind";
import Componentcomestado from "./Componentcomestado";
import Botaonegativo from "./Botaonegativo";
import Input from "./Input";

function handleClick() {
  console.log('clicou no pai')
}
function handleClick1() {
  console.log('clicou no 1')
}
function handleClick2() {
  console.log('clicou no 2')
}

class App extends React.Component{
  render() {
  return (
    <div className="App">
     <h1>Olá Princesa Lara</h1>
     <button onClick={handleClick}>Botão Pai</button>
     <button onClick={handleClick1}>Botão 1</button>
     <button onClick={handleClick2}>Botão 2</button>
     <Thisandblind />
     <Componentcomestado />
     <Botaonegativo />
     <Input />
    </div>
  );
}
}

export default App;
