import React from "react";
import { Link } from "react-router-dom";

export default class Exemplo extends React.Component {
    render() {
        return (
            <div>
                <h1>Pagina de Exemplo HOME</h1>
                <p>Simulando a exxecução de uma página por link</p>
                <Link to="/exemplo1">Exemplo1</Link>
                <br></br>
                <Link to="/">Exemplo</Link>
                <br></br>
                <Link to="/exemplo2">Exemplo2</Link>
            </div>
        )
    }
}