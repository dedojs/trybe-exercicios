import React from 'react';
import logo from './logo512.png'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;

    return (
      <div>
        <h1>Teste de Inputs</h1>
        <h2>Subtitulo</h2>
        <img src={ logo } alt="logo" />
        <p>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              id="nome"
              name="nome"
              value={ nome }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
        <button type='button'>Pesquisar</button>
      </div>
    );
  }
}
export default App;