import React from 'react'
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h4><Link to={'/'}>Curso</Link></h4>
        <nav>
          <Link to={'/Exemplo'}>Exemplo 1</Link>
          <Link to={'/Exemplo1'}>Exemplo 2</Link>
        </nav>
      </div>
    );
  }
}


