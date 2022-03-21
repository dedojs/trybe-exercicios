import React from 'react';
import "./App.css";
import TvList from './components/TvList';
class App extends React.Component {
  render() {
    return (
      <main>
        <h1 className='app'>Aula ao Vivo </h1>
        <h2>Séries Trybers</h2>
        <section>
          <TvList />
        </section>
      </main>
    );
  }
}
export default App;
