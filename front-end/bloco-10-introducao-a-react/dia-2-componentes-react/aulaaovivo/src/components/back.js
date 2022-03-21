import React from "react";
import catalog from "../data";
import TvShow from "./TvShow";
import "../App.css";



class Input extends React.Component {
    constructor() {
        super()
        this.state ={
            typedText: ''
        }

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(event) {
        this.setState({
            [event.target.name]:event.target.value
        }, () => console.log(this.state.typedText))
        if(this.className === 'data') {
            this.className = 'none'
        }
    }

    render() {
        return (
            <div>
            <input type='text' name='typedText' onChange ={this.handleFilter} />
            <section>
            {catalog
              .filter((filme) => filme.name.includes(this.state.typedText))
              .map((item) => {
                return (
                  <TvShow key={item.id} tvShow={item} />
                )
              })
            }
            </section>
        </div>
        )
    }
}

export default Input

