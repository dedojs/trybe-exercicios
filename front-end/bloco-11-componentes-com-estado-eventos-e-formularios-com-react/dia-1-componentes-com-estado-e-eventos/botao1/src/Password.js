import React from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";


class Password extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            mostraPass: 'password'
        }
        this.handlePAss = this.handlePAss.bind(this)
    }

    handlePAss() {
        this.state.mostraPass === 'password'
            ? this.setState({mostraPass: 'text'})
            : this.setState({mostraPass:'password'})
    }

    render() {
        return (
            <div>
                <hr/>
                <label>Password</label>
                <input type={this.state.mostraPass} />
                <button onClick={this.handlePAss}>Mostrar</button>
            </div>
        )
    }
}

export default Password