import React from "react";

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            typedText: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            typedText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <hr />
                <h1> Teste de input </h1>
                <input value={this.state.typedText} onChange={this.handleChange} type='text' placeholder="Digite algo aqui"/>
                <h2>{this.state.typedText}</h2>
                <hr />
            </div>
        )
    }
}

export default Input