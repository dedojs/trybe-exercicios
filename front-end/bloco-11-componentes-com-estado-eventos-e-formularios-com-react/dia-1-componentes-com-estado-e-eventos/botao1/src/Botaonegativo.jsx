import React from "react";
import './App.css';

class Botaonegativo extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            numeroDeCliques: 100
        }
    }

    handleClick() {
        this.setState((estadoAnterior, _props) => ({
            numeroDeCliques: estadoAnterior.numeroDeCliques - 1
        }))
    }

    render() {
        return (
            <button className="b3" onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
        )
    }
}

export default Botaonegativo