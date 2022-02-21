import React from "react";
import './App.css';

class Thisandblind extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            numeroDeCliques: 0
        }
    }
    handleClick () {
        this.setState((estadoAnterior, _props) => ({
            numeroDeCliques: estadoAnterior.numeroDeCliques + 1
        }))
    }
    render() {
        return (
            <button className="b2" onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
        )
    }
}

export default Thisandblind