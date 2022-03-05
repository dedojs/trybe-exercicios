import React from 'react';
import Loading from './Loading';

export default class Exemplo1 extends React.Component {
  constructor(props) {
    console.log('app - constructor')
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    console.log('app didmount')
    setTimeout(() => {
      this.setState((prev) => ({
        loading: !prev.loading,
      }))
    }, 2000)
  }

  componentDidUpdate() {
    console.log('app didupdate')
  }

  render() {
    console.log(' app render,')
    return (
      <div className="App">
        <h1>Hello bloco 12.1</h1>
        <div>
          {
            this.state.loading ?  <Loading /> : 'Item Carregado!'
          }
        </div>

  
       
      </div>
    );
  }
}

