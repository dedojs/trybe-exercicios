import React from "react";

const name = <h1>André Luis de Jesus Sousa</h1>
const desc = <p>Um futuro DEV</p>

function nomeDesc (nome, descr) {
    return `Meu nome é ${nome} e sou um ${descr}`
}

const element = <h1>Hello, {nomeDesc('André', 'DEV')}</h1>
const container = <div className="hello">{element}</div>

export default container;

