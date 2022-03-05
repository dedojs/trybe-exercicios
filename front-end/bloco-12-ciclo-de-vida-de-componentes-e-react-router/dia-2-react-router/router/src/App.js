import React from 'react'
import Exemplo from './Exemplo';
import Exemplo1 from './Exemplo1';
import Exemplo2 from './Exemplo2';
import { BrowserRouter, Route } from 'react-router-dom';
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/exemplo1" component={Exemplo1}>
          <Exemplo1 />
          <p>Testando ate onde vai </p>
        </Route>
        <Route path="/exemplo2" component={Exemplo2} />
        <Route exact path="/" component={Exemplo} />
      </BrowserRouter>
    );
  }
}


