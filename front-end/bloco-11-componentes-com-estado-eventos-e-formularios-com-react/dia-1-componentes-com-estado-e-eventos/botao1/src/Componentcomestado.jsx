import React from "react";
import './App.css';

class Componentcomestado extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            numeroDeCliques: 0
        }
    }

    handleClick() {
        this.setState((estadoAnterior, _props) => ({
            numeroDeCliques: estadoAnterior.numeroDeCliques + 1
        }))
        if (this.state.numeroDeCliques % 2 === 1) {
            console.log('par')
            this.className = 'b4'
        } else {
            this.className = 'b1'
        }
    }

    render() {
        console.log(this)
        return (
            <button className={this.className} onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
        )
    }
}

export default Componentcomestado