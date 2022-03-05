import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data"

class Pokedex extends React.Component {
    render() {
        return (
            <section>
                {pokemons.map((item) => {
                return (
                  <Pokemon key={item.id} pokemons={item} />
                )
              })}
            </section>
        )
    }
}

export default Pokedex;