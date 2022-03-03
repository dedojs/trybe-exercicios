import './Css/App.css';
import React from 'react'
import Form from './Components/Form2';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Olá Mundo</h1>
        <Form />
      </div>
    );
  }
}

