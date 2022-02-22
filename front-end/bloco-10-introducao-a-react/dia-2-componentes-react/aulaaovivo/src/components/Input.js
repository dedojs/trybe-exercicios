import React from "react";
import catalog from "../data";
import TvShow from "./TvShow";
import "../App.css";



class Input extends React.Component {
    constructor() {
        super()
        this.state ={
            typedText: '',
            typedGenre: ''
        }

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(event) {
        this.setState({
            [event.target.name]:event.target.value
        }, () => console.log(event.target.name))
    }

    render() {
        return (
            <div >
                <section className="search" >
                    <label>Nome:</label>
                    <input type='text' name='typedText' onChange ={this.handleFilter} />
                    <label>Genêro:</label>
                    <input type='text' name='typedGenre' onChange ={this.handleFilter} />
                </section>
            <section>
            {catalog
                .filter((filme) => filme.name.includes(this.state.typedText))
                .filter((filme) => filme.genre.includes(this.state.typedGenre))
                .map((item) => <TvShow key={item.id} tvShow={item} />)
            }
            </section>
        </div>
        )
    }
}

export default Input

