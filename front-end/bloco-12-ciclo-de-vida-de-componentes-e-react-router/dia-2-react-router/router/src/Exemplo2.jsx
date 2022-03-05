import React from "react";
import { Link } from "react-router-dom";

export default class Exemplo2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Pagina de Exemplo lINK 2</h1>
                <h2>Pagina 3 do exemplo</h2>
                <p>Simulando a exxecução de uma página por link</p>
                <p>Testando as rotas</p>
                <Link to="/exemplo1">Exemplo1</Link>
                <Link to="/">Exemplo1</Link>
                <Link to="/exemplo2">Exemplo2</Link>
            </div>
        )
    }
}