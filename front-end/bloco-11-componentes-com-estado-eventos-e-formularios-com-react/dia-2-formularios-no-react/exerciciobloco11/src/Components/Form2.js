import React from 'react';
import Nome from './Nome';
import '../Css/Form.css'
import '../Css/Button.css'
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Buttons from './Buttons';
import Email from './Email';
import Cpf from './Cpf';
import Moradia from './Moradia';
import Emprego from './Emprego';
import Resumo from './Resumo';
import Enviar from './Enviar';

export default class Form extends React.Component{
    constructor() {
        super()

        this.state = {
            nome: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            tipo: '',
            resumo: '',
            cargo: '',
            cargoDesc:'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClean = this.handleClean.bind(this)
        this.handleSend = this.handleSend.bind(this)
    }

    handleChange({target}) {
        const { name } = target
        const value = target.type === 'radio' ? target.id : target.value
        if (name === 'nome'){
            this.setState({
                [name]: value.toUpperCase()
            })
        } else {
        this.setState({
            [name]: value
        })
        }
    }

    handleClean() {
        this.setState({
            nome: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            tipo: '',
            resumo: '',
            cargo: '',
            cargoDesc:'',
        })
        const div = document.querySelector('.relatorio')
        div.style.display = 'none'
    }

    handleSend() {
        const div = document.querySelector('.relatorio')
        div.style.display = 'flex'
    }

    
    render() {
        // const { handleChange } = this
        return (
            <ul>
                <fieldset className='form'>
                    <legend>Curricúlo 2.0</legend>
                    <Nome value={this.state.nome} handleChange={this.handleChange}/>
                    <Email value={this.state.email} handleChange={this.handleChange}/>
                    <Cpf value={this.state.cpf} handleChange={this.handleChange}/>
                    <Endereco value={this.state.endereco} handleChange={this.handleChange}/>
                    <Cidade value={this.state.cidade} handleChange={this.handleChange}/>
                    <Estado value={this.state.estado} handleChange={this.handleChange}/>
                    <Moradia value={this.state.moradia} handleChange={this.handleChange}/>
                </fieldset>
                    <Emprego value={this.state.cargo} desc={this.state.cargoDesc} handleChange={this.handleChange}/>
                    <Resumo desc={this.state.resumo} handleChange={this.handleChange}/>
                <div className='divBtn'>
                    <Buttons text={'Enviar'} classe={'btn first'} funcao={this.handleSend}/>
                    <Buttons text={'Limpar'} classe={'btn2 first2'} funcao={this.handleClean}/>
                </div>
                <div className='relatorio'>
                    <Enviar 
                    nome={this.state.nome}
                    email={this.state.email}
                    cpf={this.state.cpf}
                    endereco={this.state.endereco}
                    cidade={this.state.cidade}
                    estado={this.state.estado}
                    moradia={this.state.moradia}
                    cargo={this.state.cargo}
                    cargoDesc={this.state.cargoDesc}
                    resumo={this.state.resumo}
                    />
                </div>
            </ul>
        )
    }
}