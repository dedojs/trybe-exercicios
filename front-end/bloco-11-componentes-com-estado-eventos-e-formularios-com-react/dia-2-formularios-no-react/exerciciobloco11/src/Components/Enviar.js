import React from 'react'

export default class Enviar extends React.Component {
    render() {
        const { nome, email, cpf, endereco, cidade, estado, moradia, cargo, resumo, cargoDesc } = this.props
        return (
            <fieldset >
                <legend>Cúrriculo</legend>
                <li>Nome: {nome}</li>
                <li>Email: {email}</li>
                <li>Cpf: {cpf}</li>
                <li>Endereço: {endereco}</li>
                <li>Cidade: {cidade}</li>
                <li>Estado: {estado}</li>
                <li>Moradia: {moradia}</li>
                <li>Cargo: {cargo}</li>
                <li>Descrição do cargo: {cargoDesc}</li>
                <li>Resumo: {resumo}</li>
            </fieldset>
        );
    }
}