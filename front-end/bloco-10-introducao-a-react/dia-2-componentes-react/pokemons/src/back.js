import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data"

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      name: pokemons.map((item) => item.name),
    }
    this.next = this.next.bind(this)
    this.filtro = this.filtro.bind(this)
    this.all = this.all.bind(this)
  }

  next() {
    this.setState ((prev) => ({
      index: this.state.index >= this.state.name.length -1 ? prev.index=0 : prev.index +1
    }))
  }

  all() {
    this.setState ((prev) => ({
      index: this.state.index >= pokemons.length -1 ? prev.index=0 : prev.index +1,
      name: pokemons.map((item) => item.name)
    }))
  }

  filtro(event) {
    const pokes = pokemons.filter((item) => {
      return (
        item.type === event.target.innerText)
    })
    this.setState({
      index: 0,
      name: pokes.map((element) => element.name)
    }, () => console.log(this.state.name))
  }

    render() {
      const { index } = this.state
      const { name } = this.state
      const types = pokemons.map((item) => item.type)
      const newList = [...new Set(types)]
        return (
          <div>
            <section>
                {
                  pokemons
                  .filter((item) => item.name.includes(name[index]))
                  .map((poke) => <Pokemon key={pokemons.id} pokemons={poke} />)
                }
            </section>
            <div>
              {
                newList
                  .map((item, index) => {
                  return (
                    <button key={item} className="button" onClick={this.filtro}>{item}</button>
                  )
                })
              }
            </div>
            <button className="button" onClick={this.all}>All</button>
            <button className="button" onClick={this.next}>Next</button> 
          </div>
        )
    }
}

export default Pokedex;