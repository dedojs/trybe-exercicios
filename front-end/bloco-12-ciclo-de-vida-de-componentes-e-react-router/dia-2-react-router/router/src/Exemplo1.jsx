import React from "react";
import { Link } from "react-router-dom";

export default class Exemplo1 extends React.Component {
    render() {
        return (
            <div>
                <h1>Pagina de Exemplo lINK 1</h1>
                <h2>Pagina 2 do exemplo</h2>
                <p>Simulando a exxecução de uma página por link</p>
                <Link to="/exemplo1">Exemplo1</Link>
                <Link to="/">Exemplo1</Link>
                <Link to="/exemplo2">Exemplo2</Link>
            </div>
        )
    }
}