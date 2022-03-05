import React from 'react'


class Pokemon extends React.Component {
    render() {
        const { pokemons } = this.props
        return (
                <article>
                    <div className='data'>
                    <h2>{pokemons.name}</h2>
                    <img src={pokemons.image} alt='imagem do pokemons'/>
                    
                    <p>Tipo: <strong>{pokemons.type}</strong></p>
                    <p>Peso: <strong>{pokemons.averageWeight.value} {pokemons.averageWeight.measurementUnit}</strong></p>
                    </div>
                </article>
        )
           
    }
}

export default Pokemon